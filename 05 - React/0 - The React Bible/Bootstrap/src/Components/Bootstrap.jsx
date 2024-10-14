import { Form, Button } from 'react-bootstrap'

export default function Bootstrap() {
    return (
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Email Adresa</Form.Label>
                <Form.Control type='email' placeholder='Unesite email adresu' name='email' />
                <Form.Text className='text-muted'>Vaša privatnost je zajamčena.</Form.Text>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Lozinka</Form.Label>
                <Form.Control type='password' placeholder='Lozinka' name='password' />
            </Form.Group>

            <Button variant='success' className=''>Prijavi se</Button>

        </Form>
    );
}