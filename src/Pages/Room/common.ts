export type Room = {
    id: number;
    title: string;
    time: string;
    modal: string;
    modalContent?: string[];
    details: string;
    type: string;
};
export const rooms: Room[] = [
    {
        id: 1,
        title: 'Room 1',
        time: '12/06- 18/06',
        modal: '3',
        modalContent: ['Ống nước hỏng', 'Lấy thêm đồ ăn', 'Không bật được đèn nhà tắm'],
        details: 'This is more detailed information about Room 1.',
        type: 'Standard', 
    },
    {
        id: 2,
        title: 'Room 2',
        time: '12/06- 18/06',
        modal: '',
        modalContent: [],
        details: 'This is more detailed information about Room 2.',
        type: 'Standard', 
    },
    {
        id: 3,
        title: 'Room 3',
        time: '12/06- 18/06',
        modal: '1',
        modalContent: ['Ống nước hỏng'],
        details: 'This is more detailed information about Room 3.',
        type: 'King', 
    },
    
    {
        id: 4,
        title: 'Room 2',
        time: '12/06- 18/06',
        modal: '',
        modalContent: [],
        details: 'This is more detailed information about Room 2.',
        type: 'Double',
    },
    
    {
        id: 5,
        title: 'Room 2',
        time: '12/06- 18/06',
        modal: '',
        modalContent: [],
        details: 'This is more detailed information about Room 2.',
        type: 'King', 
    },
    {
        id: 6,
        title: 'Room 3',
        time: '12/06- 18/06',
        modal: '3',
        modalContent: ['Ống nước hỏng', 'Lấy thêm đồ ăn', 'Không bật được đèn nhà tắm'],
        details: 'This is more detailed information about Room 1.',
        type: 'Standard', 
    },
    {
        id: 7,
        title: 'Room 4',
        time: '12/06- 18/06',
        modal: '3',
        modalContent: ['Ống nước hỏng', 'Lấy thêm đồ ăn', 'Không bật được đèn nhà tắm'],
        details: 'This is more detailed information about Room 1.',
        type: 'Standard', 
    }    
];