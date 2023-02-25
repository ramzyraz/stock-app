import { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const Search = () => {
    const [searchString, setSearchString] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { data } = useFetch(`https://yfapi.net/v11/finance/quoteSummary/${searchString}?lang=en&region=US&modules=defaultKeyStatistics%2CassetProfile`)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value)
        setError(false)
    }

    const handleSearch = () => data && data?.quoteSummary?.result ? navigate(`/stocks/:${searchString}`, { state: searchString}) : setError(true);
    return (
        
        <Container>
            <Form
                onSubmit={(event) => event.preventDefault()}
                className="mt-2 mb-4"
            >
                <Row>
                    <Col xs={11}>
                        <Form.Control
                            type="text"
                            placeholder="Search by Symbol..."
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs={1}>
                        <Button variant="primary" type="submit" onClick={handleSearch}>
                            <BsSearch />
                        </Button>
                    </Col>
                </Row>
                {
                    error && <div className='error-msg'>Couldn't find this symbol. Please enter again</div>
                }
            </Form>
        </Container>
    )
}

export default Search;