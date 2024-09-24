import express from "express";
import cloudinary from "cloudinary";
import multer from "multer";
import stream from "stream"; 
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type'
}));

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY,      
  api_secret: process.env.API_SECRET   
});

// Multer setup for file storage in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Generic function to upload media to Cloudinary
const uploadToCloudinary = (buffer, options) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
    
    const streamUpload = new stream.PassThrough();
    streamUpload.end(buffer);
    streamUpload.pipe(uploadStream);
  });
};

// Endpoint for uploading photos via URL
app.post('/upload/photo-from-url', async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.imageUrl, { 
      resource_type: 'image',  // Image type
      folder: 'photos'  // Optional folder to categorize
    });
    res.status(200).json(result);  // Send Cloudinary response
  } catch (error) {
    res.status(500).json({ error: 'Photo upload from URL failed', details: error });
  }
});

// Endpoint for uploading videos via URL
app.post('/upload/video-from-url', async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.videoUrl, { 
      resource_type: 'video',  // Video type
      folder: 'videos'  // Optional folder to categorize
    });
    res.status(200).json(result);  // Send Cloudinary response
  } catch (error) {
    res.status(500).json({ error: 'Video upload from URL failed', details: error });
  }
});

// Movies data (for your movie API)
let movies = [
 {
    "id":1,
    "title": "MUNJYA",
    "year": 2024,
    "rank": 5,
    "rankChange": "▲ +5",
    "rating": 66,
    "imdbRating": 6.5,
    "imdbVotes": "21k",
    "backdropImage": "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727198436/cz2bv235xugnodkvuqe0.webp",
    "posterImage": "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727198718/bxihkuajfucczza4ldhc.webp",
    "duration": "2h 3min",
    "highestRank": 1,
    "top10Days": 10,
    "top100Days": 50,
    "top1000Days": 100,
    "watchOptions": [
      {"platform": "Netflix", "price": "$9.99"},
      {"platform": "Amazon Prime", "price": "$7.99"}
    ]
  },
 


];

// Endpoint to get all movies
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

// Endpoint to get a single movie by ID
app.get('/api/movies/:id', (req, res) => {
  const id = req.params.id;
  const movie = movies.find(movie => movie.id === parseInt(id));
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  res.json(movie);
});

// Endpoint to add a new movie
app.post('/api/movies', (req, res) => {
  const newMovie = { ...req.body, id: movies.length + 1 }; // Simple ID generation
  movies.push(newMovie);
  res.status(201).json(newMovie); 
});

// Listen to server on the defined PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});





















