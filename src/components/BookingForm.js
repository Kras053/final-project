import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import WishListItem from './WishListItem';
import swal from '@sweetalert/with-react';
// import { wishlist } from '../reducers/wishlist';




const BookingForm = () => {



    const products = useSelector((store) => store.wishlist.items)
    const totalPrice = useSelector((store) => (
        store.wishlist.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
    ))

   

        
    const [mailerState, setMailerState] = useState ({
        name: "",
        email: "",
        phonenumber: "",
        startdate: "",
        enddate: "",
        message: "",
        products: {},
    });

    const handleStateChange = (e) => {
        setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    } 

    const submitEmail = async (e) => {
        e.preventDefault();
        console.log({ mailerState });

        const data = mailerState;
        data.products = {products}

        // const replacer = (key, value) => {
        //     if (key === products.mainImage) {
        //         console.log(key)
        //       return undefined;
        //     }
        //     return value;
        //   }

        // const response = await fetch("http://localhost:8090/send", {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json",
        //     },
        //     body: JSON.stringify( data, (key, value) => {
            
        //         if (key === "url") {
        //           return undefined;
        //         }
        //         return value;
        //     }),
        // })
         
        const response = await fetch("https://final-project-nsd.herokuapp.com/send", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ data })
        })
        .then((res) => res.json())
        .then(async (res) => {
            const resData = await res;
            console.log(resData);
            if (resData.status === "success") {
                // alert("Message Sent!");
                swal({
                    title: 'Din förfrågan har skickats!',
                    text: 'Tack för ditt mail! Vi hör av oss inom kort när vi sett över dina önskemål och tillgänglighet!',
                    // icon: 'success',
                    button: 'Ok',
                });

            } else if (resData.status === "fail") {
                // alert("Message failed to send");
                swal({
                    title: 'Din förfrågan kunde inte skickas.',
                    text: 'Ajdå, något verkar ha gått fel! Kontakta oss gärna direkt på nordicspellsdecor@gmail.com så pratar vi vidare där!',
                    // icon: 'success',
                    button: 'Ok',
                });
            }
        })
        .then(() => {
            console.log(response)
            setMailerState({
                name: "",
                email: "",
                phonenumber: "",
                startdate: "",
                enddate: "",
                message: "",
                products: {},
            });
        });
    };


    return (
        <section className="formy-form">
            <h2>Planning a wedding or an event?</h2>
            <h2>Send your booking request down below!</h2>
            <div>
                <div>
                    <form
                        // name="wishlistform"
                        // id="wishlistform"
                        // method="post"
                        // action="/success"
                        onSubmit={submitEmail}
                     >    
                           {/* <input type="hidden" name="form-name" value="wishlistform" /> */}
                        <ul>
                            <li>
                            <label className="custom-field">
                                Name
                                <input 
                                    type="text"
                                    name="name"
                                    placeholder="namn"
                                    value={mailerState.name}
                                    onChange={handleStateChange}
                                    required
                                />
                            </label>
                           </li>
                 
                            <li>
                            <label className="custom-field">
                                Phone number
                                <input
                                    type="tel" 
                                    name="phonenumber"
                                    placeholder="telefonnummer"
                                    value={mailerState.phonenumber}
                                    onChange={handleStateChange}
                                />
                            </label>
                            </li>
                 
                            <li>
                            <label className="custom-field">
                                Email
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="email"
                                    value={mailerState.email}
                                    onChange={handleStateChange}
                                    required
                                />
                            </label>
                             </li>

                             <li>
                                <label className="custom-field">
                                   Från
                                    <input 
                                        type="date" 
                                        name="startdate" 
                                        value={mailerState.startdate}
                                        onChange={handleStateChange}
                                        // required
                                    />
                                </label>
                             </li>

                             <li>
                                <label className="custom-field">
                                    till
                                    <input 
                                        type="date" 
                                        name="enddate" 
                                        value={mailerState.enddate}
                                        onChange={handleStateChange}
                                        // required
                                    />
                                </label>
                             </li>
    
                            <li>
                                <label className="custom-field">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Skriv ett meddelande här"
                                    name="message"
                                    value={mailerState.message}
                                    onChange={handleStateChange}    
                                >
                                </textarea>
                            </li>

                            <li>
                                <label className="custom-field">
                                    Hyrsaker
                                </label>
                                <textarea
                                    name="rentalitems"
                                    value={mailerState.products}
                                    onChange={handleStateChange}    
                                >

                                </textarea>
                            </li>
                 
                            <li>
                                <FormButton type="submit">Send</FormButton>
                             </li>
                 
                        </ul>
                    </form>
                </div>
            </div>
            <section className="wishlist">
                <ul className="wishlist-ul">
                    {products.map((product, index) => {
                        return(
                            <WishListItem key={index} product={product} />
                        )
                    })}
                </ul>
                <p className="total">Total cost: {totalPrice} SEK</p>
            </section>
        </section>
    )

};

export default BookingForm;


const FormButton = styled.button`
    width: 55%;
    margin: 15px 0 65px 0;
    cursor: pointer;
    border: none;
    font-size: 16px;

    padding: 1rem;
    color: black;
    background-color: rgb(179,99,90);
    text-transform: uppercase;
    font-weight: 450;
    
    &:hover {
    background-color: black;
    color: white;
    transition: 0.7s ease;
    /* height: 30px; */
    }
`;