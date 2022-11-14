import React, { useState, useEffect } from 'react'

function Card() {
    const [user, setUser] = useState([]);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            }).then((data) => {
                let contact = data
                console.log(data);
                setUser(contact)
            })
    }
    useEffect(() => {
        fetchData();
    }, [])

    const updateContact = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'PUT',
            body: JSON.stringify({
                'id': 1,
                'name': 'foo',
                'email': 'bar',
                'phone': '1 - 770 - 736 - 8031 x56442',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    const deleteContact = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'DELETE',
        });
    }

    const addContact = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: 'foo',
                email: 'bar',
                phone: '1 - 770 - 736 - 8031 x56442',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }



    return (
        <div className="clearfix">
            <h1 className="header"> My Contacts App</h1>
            <button className='button addbtn' type="button" onClick={addContact}> Add Contact </button> <br /><br />
            <div className="row">
                {user.map(data => (
                    <div className="col-md-4" key={data.id}>
                        <div className="card">
                            <div className="card-body">
                                <div className="avatar">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
                                        className="card-img-top"
                                        alt=""
                                    />
                                </div>
                                <h4 className="card-title">
                                    {data.name}
                                </h4>

                                <p className="card-text">
                                    <h6>
                                        {data.email}
                                        <br />
                                        {data.address.city +
                                            ", " +
                                            data.address.zipcode}
                                        <br />
                                        <span className="phone">{data.phone}</span>
                                    </h6>
                                </p>
                                <div className='btns'>
                                    <button className='button' type="button" onClick={updateContact}> Update </button><br />
                                    <button className='button' type="button" onClick={deleteContact}> Delete </button>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>

        </div>

    )
}

export default Card
