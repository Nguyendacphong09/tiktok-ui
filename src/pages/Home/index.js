import * as searchServices from '~/services/searchService';
import { useState, useEffect } from 'react';
import ContentElement from '~/components/ContentElement/ContentElement';

function Home() {
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.getUsers();
            setUsers(result);
        };
        fetchApi();
    }, []);
    return (
        <div>
            {Users.map((user, index) => (
                <ContentElement data={user} key={index} />
            ))}
        </div>
    );
}

export default Home;
