import images from '../assets/images/index';
import {ToastAndroid} from 'react-native';

const description1 = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ipsum mauris. 
Vestibulum est lorem, lobortis molestie tellus quis, faucibus ultrices magna. Vestibulum 
cursus metus sem, nec ullamcorper massa blandit ac. Sed iaculis dolor vitae erat aliquet congue. 
`;

const description2 = `
Suspendisse in justo euismod, commodo tortor quis, vehicula ipsum. Aenean ultrices metus quis lectus 
pharetra malesuada. Integer dignissim, ante sed condimentum consequat, ligula urna gravida sapien, 
et tempor dui massa ac tortor. Aenean ultrices interdum velit, eget cursus lorem hendrerit id. 
Donec auctor, tortor quis dignissim placerat, erat sapien egestas mi, efficitur scelerisque 
sapien ligula in dolor.
`;

const description3 = `
Sed suscipit sem consectetur magna pharetra facilisis ut non arcu. Sed vel tristique lorem, 
eu semper justo. Quisque vestibulum venenatis risus ut congue. Praesent faucibus, ligula ac 
interdum auctor, sapien ante placerat tortor, ut dapibus orci orci vel augue. Vestibulum quis 
elit ut mi interdum cursus.
`;

const jobs = [
  {
    photo: images[0],
    description: description1,
    title: 'Dev Java pleno',
    salary: '6000,00',
  },
  {
    photo: images[1],
    description: description3,
    title: 'Dev NODE Jr.',
    salary: '3500,00',
  },
  {
    photo: images[2],
    description: description2,
    title: 'SCRUM Master',
    salary: '10000,00',
  },
  {
    photo: images[3],
    description: description3,
    title: 'Estágio',
    salary: '1500,00',
  },
  {
    photo: images[4],
    description: description2,
    title: 'Estágio',
    salary: '2800,00',
  },
  {
    photo: images[2],
    description: description1,
    title: 'Designer',
    salary: '4000,00',
  },
  {
    photo: images[6],
    description: description3,
    title: 'Front End - React',
    salary: '2500,00',
  },
  {
    photo: images[5],
    description: description2,
    title: 'Ilustrador',
    salary: '4000,00',
  },
  {
    photo: images[3],
    description: description1,
    title: 'Recursos Humanos',
    salary: '3800,00',
  },
  {
    photo: images[4],
    description: description3,
    title: 'Contador',
    salary: '3000,00',
  },
];

const getAllJobs = () => jobs;

const subscribeToJob = () => {
  ToastAndroid.showWithGravity(
    'Inscrito com sucesso!',
    ToastAndroid.LONG,
    ToastAndroid.TOP,
  );
};

export {getAllJobs, subscribeToJob};
