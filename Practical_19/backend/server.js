import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/practical19_react_db')
  .then(() => console.log('Connected to MongoDB Successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schemas
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  password: { type: String, required: true }
});

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  course: { type: String, required: true },
  branch: { type: String, required: true },
  fee: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);
const Student = mongoose.model('Student', studentSchema);

// --- Auth Routes ---
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, contact, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists!' });
    
    const newUser = new User({ name, email, contact, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!', user: { name: newUser.name, email: newUser.email } });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up', error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found!' });
    
    if (user.password !== password) return res.status(400).json({ message: 'Invalid password!' });
    
    res.status(200).json({ message: 'Login successful!', user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

// --- Student CRUD Routes ---
// Get all students
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error: error.message });
  }
});

// Add new student
app.post('/api/students', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating student', error: error.message });
  }
});

// Update student
app.put('/api/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error: error.message });
  }
});

// Delete student
app.delete('/api/students/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Student deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
