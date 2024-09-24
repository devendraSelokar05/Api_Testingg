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
    "id": 1,
    "title": "Stree 2",
    "year": "2024",
    "genre": "Horror Comedy",
    "rating": "9/10",
    "cast": ["Rajkumar Rao", "Shraddha Kapoor", "Pankaj Tripathi", "Aparshakti Khurana"],
    "plot": "In the small town of Chanderi, a mysterious woman, known as 'Stree,' appears every year during the local festival and kidnaps men, leaving behind only their clothes. The town believes this is the work of a vengeful spirit who seeks revenge on men for wronging her.",
    "image": "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727065607/fj8hy2bfsxpjwrybpopr.webp"
  },
  {
    "id": 2,
    "title": "Fighter",
    "year":"2024",
    "genre": "Action",
    "rating":"7.5/10",
    "cast" : ["Hrithik Roshan", "Deepika Padukone", "Anil Kapoor", "Karn Singh Grover"],
    "plot" :"Shamsher Pathania fulfills his lifelong dream and becomes a member of the Indian air force. As he faces rigorous challenges, Patty must rise above his own limitations to become a true hero",
    "image": "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727065833/wm8c5injxpce2olm2iuv.webp"

},

{
  "id": 3,
  "title": "Animal",
  "year":"2023",
  "genre": "Action/Thriller",
  "rating":"6.2/10",
  "cast" : ["Ranbir Kapoor", "Rashmika Mandanna", "Anil Kapoor", "Tripti Dimri", "Bobby Deol"],
  "plot" :"The son of a wealthy, powerful industrialist returns to India and undergoes a remarkable transformation as he becomes consumed by a quest for vengeance against those threatening his father's life.",
  "image": "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727065956/zftinugwxm0rvujf6avw.webp"



},

{
"id": 4,
"title": "KGF CHAPTER-2",
"year":"2022",
"genre": "Action/Thriller",
"rating":"8.5/10",
"cast" : ["Rocking Star Yash", "Srinidhi Shetty", "Raveena Tandon", "Sanjay Dutt"],
"plot" :"Rocky successfully rises as the leader and saviour of the people of the Kolar Gold Fields. But, in his goal to fulfil his mother's wishes, Rocky must tackle Adheera, Inayat Khalil and Ramika Sen.",
"image": "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727066278/sli2ihusjsbojjbmzvpq.webp"


},

{
"id": 5,
"title": "Pushpa:The Rise Part-01",
"year":"2021",
"genre": "Action/Thriller",
"rating":"8/10",
"cast" : ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil", "Samantha Ruth Prabhu"],
"plot" :"A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.",
"image": "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727066387/yowmeivtst88grnvpitb.webp"


},

{
"id": 6,
"title": "Spider-Man: No Way Home ",
"year":"2021",
"genre": "Action/Fantasy",
"rating":"8/10",
"cast" : ["Tom Holland", "Zendaya", "Tobey Maguire", "Marisa Tomei", "Andrew Garfield"],
"plot" :"Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Strange's spell goes horribly wrong, leading to unwanted guests entering their universe.",
"image": "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727066464/jgmlwowspmbziheh2f22.webp"



},

{
"id": 7,
"title": "Doctor Strange In The Multiverse Of Madness",
"year":"2021",
"genre": "Action//Horror",
"rating":"6.9/10",
"cast" : ["Benedict Cumberbatch", "Elizabeth Olsen", "Xochitl Gomez", "Hayley Atwell", "Benedict Wong"],
"plot" :"Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple   threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse",
"image": "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727066553/aviq7psm4llxknywcuvg.webp"


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





















