import images from '../assets/images/index'
const jobs = [
  {
    photo: images[0],
    description: 'Loren Ipsum',
    title: 'Dev Java pleno',
    salary: '6000',
  },
  {
    photo: images[1],
    description: '',
    title: images.i1,
    salary: '',
  },
  {
    photo: images[2],
    description: '',
    title: '',
    salary: '',
  },
  {
    photo: images[3],
    description: '',
    title: '',
    salary: '',
  },
  {
    photo: images[4],
    description: '',
    title: '',
    salary: '',
  },
];

const getAllJobs = () => jobs;

export { getAllJobs };
