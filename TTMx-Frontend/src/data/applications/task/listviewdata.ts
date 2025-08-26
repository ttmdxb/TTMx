import face1 from '/images/faces/1.jpg';
import face2 from '/images/faces/2.jpg';
import face3 from '/images/faces/3.jpg';
import face5 from '/images/faces/5.jpg';
import face6 from '/images/faces/6.jpg';
import face8 from '/images/faces/8.jpg';
import face9 from '/images/faces/9.jpg';
import face10 from '/images/faces/10.jpg';
import face11 from '/images/faces/11.jpg';
import face12 from '/images/faces/12.jpg';
import face13 from '/images/faces/13.jpg';
import face14 from '/images/faces/14.jpg';
import face15 from '/images/faces/15.jpg';

interface TaskDataType {
  title: string;
  count: number;
  price: string;
  priceColor: string;
  iconColor: string;
  icon: string;
  percent: string;
  svgIcon: string;
  cardClass: string;
  avatarClass: string;
  countK?: boolean
}

interface TaskItemType {
  id: string;
  title: string;
  code: string;
  startDate: string;
  status: string;
  color: string;
  dueDate: string;
  priority: string;
  priorityColor: string;
  avatars: string[];
  extraMembers: number;
  completed: boolean;
  checked?: boolean;
}

export const TaskData: TaskDataType[] = [
  {
    title: "New Tasks",
    count: 43,
    price: "12,345",
    priceColor: "primary",
    iconColor: "success fw-medium",
    icon: "ri-arrow-up-s-line me-1 align-middle",
    percent: "3.25%",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,40H40A16,16,0,0,0,24,56V208a8,8,0,0,0,11.58,7.15L64,200.94l28.42,14.21a8,8,0,0,0,7.16,0L128,200.94l28.42,14.21a8,8,0,0,0,7.16,0L192,200.94l28.42,14.21A8,8,0,0,0,232,208V56A16,16,0,0,0,216,40ZM176,144H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z"></path></svg>`,
    cardClass: "dashboard-main-card primary",
    avatarClass: 'avatar-lg'
  },
  {
    title: "Completed Tasks",
    count: 321,
    price: "4,176",
    priceColor: "secondary",
    iconColor: "danger fw-medium",
    icon: "ri-arrow-down-s-line me-1 align-middle",
    percent: "1.16%",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>`,
    cardClass: "dashboard-main-card secondary",
    avatarClass: 'avatar-lg'
  },
  {
    title: "Pending Tasks",
    count: 81,
    price: "7,064",
    priceColor: "success",
    iconColor: "success fw-medium",
    icon: "ri-arrow-up-s-line me-1 align-middle",
    percent: "0.25%",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62ZM232,128A104,104,0,0,1,38.32,180.7a8,8,0,0,1,2.87-11L120,123.83V32a8,8,0,0,1,8-8,104.05,104.05,0,0,1,89.74,51.48c.11.16.21.32.31.49s.2.37.29.55A103.34,103.34,0,0,1,232,128Z"></path></svg>`,
    cardClass: "dashboard-main-card success",
    avatarClass: 'avatar-lg'
  },
  {
    title: "Inprogress Tasks",
    count: 33,
    price: "1,105",
    priceColor: "warning",
    iconColor: "success fw-medium",
    icon: "ri-arrow-down-s-line me-1 align-middle",
    percent: "0.46%",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64ZM184,40V64H72V40Zm0,176H72V180l56-42,56,42.35Z"></path></svg>`,
    cardClass: "dashboard-main-card warning",
    avatarClass: 'avatar-lg',
    countK: true
  },
],
  Taskstable: TaskItemType[] = [
    {
      id: '1',
      title: 'Design Homepage',
      code: 'SPK-1001',
      startDate: '2025-03-01',
      status: 'In Progress',
      color: 'orange',
      dueDate: '2025-03-10',
      priority: 'High',
      priorityColor: 'danger',
      avatars: [face2, face8, face2],
      extraMembers: 2,
      completed: false,

    },
    {
      id: '2',
      title: 'Implement Login Feature',
      code: 'SPK-1002',
      startDate: '2025-03-02',
      status: 'Completed',
      color: 'success',
      dueDate: '2025-03-05',
      priority: 'Medium',
      priorityColor: 'warning',
      avatars: [face12, face1],
      extraMembers: 4,
      completed: true,
      checked: true
    },
    {
      id: '3',
      title: 'Develop Admin Dashboard',
      code: 'SPK-1003',
      startDate: '2025-03-03',
      status: 'Pending',
      color: 'info',
      dueDate: '2025-03-15',
      priority: 'High',
      priorityColor: 'danger',
      avatars: [face5, face9, face13],
      extraMembers: 5,
      completed: false,
    },
    {
      id: '4',
      title: 'Fix Bugs in User Profile',
      code: 'SPK-1004',
      startDate: '2025-03-04',
      status: 'In Progress',
      color: 'orange',
      dueDate: '2025-03-12',
      priority: 'Low',
      priorityColor: 'teal',
      avatars: [face2, face8, face2],
      extraMembers: 2,
      completed: false,
    },
    {
      id: '5',
      title: 'Update API Integration',
      code: 'SPK-1005',
      startDate: '2025-03-05',
      status: 'Completed',
      color: 'success',
      dueDate: '2025-03-06',
      priority: 'High',
      priorityColor: 'danger',
      avatars: [face10, face15],
      extraMembers: 3,
      completed: true,
      checked: true
    },
    {
      id: '6',
      title: 'Create User Notifications',
      code: 'SPK-1006',
      startDate: '2025-03-06',
      status: 'Pending',
      color: 'info',
      dueDate: '2025-03-20',
      priority: 'Medium',
      priorityColor: 'warning',
      avatars: [face12],
      extraMembers: 0,
      completed: true,
      checked: true
    },
    {
      id: '7',
      title: 'Test Payment Gateway',
      code: 'SPK-1007',
      startDate: '2025-03-07',
      status: 'In Progress',
      color: 'orange',
      dueDate: '2025-03-14',
      priority: 'High',
      priorityColor: 'danger',
      avatars: [face11, face1, face10],
      extraMembers: 1,
      completed: false,
    },
    {
      id: '8',
      title: 'Implement Search Feature',
      code: 'SPK-1008',
      startDate: '2025-03-08',
      status: 'Completed',
      color: 'success',
      dueDate: '2025-03-09',
      priority: 'Low',
      priorityColor: 'teal',
      avatars: [face3, face9],
      extraMembers: 2,
      completed: true,
      checked: true
    },
    {
      id: '9',
      title: 'Set Up Analytics Dashboard',
      code: 'SPK-1009',
      startDate: '2025-03-09',
      status: 'Pending',
      color: 'info',
      dueDate: '2025-03-25',
      priority: 'Medium',
      priorityColor: 'warning',
      avatars: [
        face5,
        face14,
        face12,
        face3,
      ],
      extraMembers: 1,
      completed: false,
     
    },
    {
      id: '10',
      title: 'Finalize Reporting Module',
      code: 'SPK-1010',
      startDate: '2025-03-10',
      status: 'In Progress',
      color: 'orange',
      dueDate: '2025-03-18',
      priority: 'High',
      priorityColor: 'danger',
      avatars: [face12, face6],
      extraMembers: 4,
      completed: false,
    },
  ];