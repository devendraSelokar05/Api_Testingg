import express from "express";
import cloudinary from "cloudinary"
import multer from "multer"
import stream from "stream"; 
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type'
})); 

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY,      
  api_secret: process.env.API_SECRET   
  });

let movies =[
    {
        "id": 1,
        "title": "Stree 2",
        "year":"2024",
        "genre": "Horror Comedy",
        "rating":"9/10",
        "cast" : ["RajkumarRao", "Shraddha Kapoor", "Pankaj Tripathi", "Aaparshakti Khurana"],
        "plot" :"In the small town of Chanderi, a mysterious woman, known as 'Stree,' appears every year during the local festival and kidnaps men, leaving behind only their clothes. The town believes this is the work of a vengeful spirit who seeks revenge on men for wronging her.",
        "image": "https://res.cloudinary.com/dnp4lqlux/image/upload/v1726986254/cdxfvnr0bstilr3q6t2o.jpg"

    },

    {
      "id": 2,
      "title": "Fighter",
      "year":"2024",
      "genre": "Action",
      "rating":"7.5/10",
      "cast" : ["Hrithik Roshan", "Deepika Padukone", "Anil Kapoor", "Karn Singh Grover"],
      "plot" :"Shamsher Pathania fulfills his lifelong dream and becomes a member of the Indian air force. As he faces rigorous challenges, Patty must rise above his own limitations to become a true hero",
     

  },

  {
    "id": 3,
    "title": "Animal",
    "year":"2023",
    "genre": "Action/Thriller",
    "rating":"6.2/10",
    "cast" : ["Ranbir Kapoor", "Rashmika Mandanna", "Anil Kapoor", "Tripti Dimri", "Bobby Deol"],
    "plot" :"The son of a wealthy, powerful industrialist returns to India and undergoes a remarkable transformation as he becomes consumed by a quest for vengeance against those threatening his father's life.",
    "image" : "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727012573/xdzdhl4c1lzarh4iri3z.webp"
  

},

{
  "id": 4,
  "title": "KGF CHAPTER-2",
  "year":"2022",
  "genre": "Action/Thriller",
  "rating":"8.5/10",
  "cast" : ["Rocking Star Yash", "Srinidhi Shetty", "Raveena Tandon", "Sanjay Dutt"],
  "plot" :"Rocky successfully rises as the leader and saviour of the people of the Kolar Gold Fields. But, in his goal to fulfil his mother's wishes, Rocky must tackle Adheera, Inayat Khalil and Ramika Sen.",
  "image" : "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727012528/ieny59v6dgqxf2exeak0.jpg"


},

{
  "id": 5,
  "title": "Pushpa:The Rise Part-01",
  "year":"2021",
  "genre": "Action/Thriller",
  "rating":"8/10",
  "cast" : ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil", "Samantha Ruth Prabhu"],
  "plot" :"A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.",
  "image": "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727012491/p2eqc6hcxug6ecmpwbpd.jpg"


},

{
  "id": 6,
  "title": "Spider-Man: No Way Home ",
  "year":"2021",
  "genre": "Action/Fantasy",
  "rating":"8/10",
  "cast" : ["Tom Holland", "Zendaya", "Tobey Maguire", "Marisa Tomei", "Andrew Garfield"],
  "plot" :"Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Strange's spell goes horribly wrong, leading to unwanted guests entering their universe.",
  "image" : "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727012780/gfyzuzqff1iiqmqboywi.jpg",



},

{
  "id": 7,
  "title": "Doctor Strange In The Multiverse Of Madness",
  "year":"2021",
  "genre": "Action//Horror",
  "rating":"6.9/10",
  "cast" : ["Benedict Cumberbatch", "Elizabeth Olsen", "Xochitl Gomez", "Hayley Atwell", "Benedict Wong"],
  "plot" :"Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple   threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse",
  "image" : "https://res.cloudinary.com/dnp4lqlux/image/upload/v1727012767/lwcdtwkurlgquitpyq5l.jpg"


},


]


// Multer setup for file storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Endpoint for uploading images
app.post('/upload', upload.single('image'), (req, res) => {
  const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result); // Yahan aapko upload ki hui image ka result mil jayega
  });

  const streamUpload = new stream.PassThrough();
  streamUpload.end(req.file.buffer);
  streamUpload.pipe(uploadStream);
});

app.get('/api/movies', (req, res) => {
    console.log(movies)
    res.json(movies);
});
app.get('/api/movies/:id', (req, res) => {
    const id = req.params.id;
    const movie = movies.find(movie => movie.id === parseInt(id));
    if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
})

app.post('/api/movies', (req, res) => {
  const newMovie = { ...req.body, id: movies.length + 1 }; // Simple ID generation
  movies.push(newMovie);
  res.status(201).json(newMovie); 
});



app.listen(PORT, () => {
  console.log(`http://localhost:4000/api/movies ${PORT}`);
});
