import { Form } from 'antd';
import { formItems } from './type';
import './Total.css'

export default function Total() {
    const formItems: formItems[] = [
        { label: 'Subtotal', value: 100 },
        { label: 'Platform Fee', value: 0 },
        { label: 'Total Amount', value: 100 },
    ];

    return (
        <>
            {formItems.map((item, index) => (
                <Form.Item
                    key={index}
                    label={<span className="total-label">{item.label}</span>}
                    style={index === 2 ? { borderTop: '2px solid #ccc', textAlign: 'right' } : { textAlign: 'right' }}
                >
                    <span className="total-value">
                        {item.value} <span className='total-value'>$</span>
                    </span>
                </Form.Item>
            ))}
        </>
    );
}
