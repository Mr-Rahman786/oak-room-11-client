import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import ReviewRow from '../ReviewRow/ReviewRow';
import swal from 'sweetalert';
import { useLocation, useNavigate } from 'react-router-dom';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    const location = useLocation()
    const nevigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this comment?');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    nevigate(from, { replace: true })
                    if (data.deletedCount > 0) {
                        swal({
                            title: "Deleted Comment Successfully",
                            text: "You clicked the button!",
                            icon: "success",
                        });
                        const remaining = reviews.filter(reviw => reviw._id !== id);
                        setReviews(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='text-3xl mt-4 text-center'>Review : {reviews.length? reviews.length:'No Review yet!'}</h2>
            
            <div className="overflow-x-auto w-full mt-3">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Comments</th>
                            <th>Product</th>
                            <th>Phone</th>
                            <th>Emails & Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></ReviewRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Review;