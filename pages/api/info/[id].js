import Icon from '../../../Assets/Craveaway.PNG';
const information = [
  {
    id: 1,
    project_name: 'This is a test. This is a test',
    description2: 'This is a test. This is a test',
    description3: 'This is a test. This is a test',
    img: [Icon, Icon, Icon],
  },
  {
    id: 2,
    project_name: 'This is a test. This is a test',
    description: 'This is a test. This is a test',
    description2: 'This is a test. This is a test',
    description3: 'This is a test. This is a test',
    img: [Icon, Icon, Icon],
  },
  {
    id: 3,
    project_name: 'This is a test. This is a test',
    description: 'This is a test. This is a test',
    description2: 'This is a test. This is a test',
    description3: 'This is a test. This is a test',
  },
  {
    id: 4,
    project_name: 'This is a test. This is a test',
    description: 'This is a test. This is a test',
    description2: 'This is a test. This is a test',
    description3: 'This is a test. This is a test',
  },
  {
    id: 5,
    project_name: 'This is a test. This is a test',
    description: 'This is a test. This is a test',
    description2: 'This is a test. This is a test',
    description3: 'This is a test. This is a test',
  },
];
export default function handler(req, res) {
  const { id } = req.query;
  const result = information.find((item) => item.id === parseInt(id));
  console.log(result);
  res.status(200).json(result);
}
