import React from 'react';
import './FullProduct.css'
const FullProduct = () => {
    return (
        <div className="fullProduct">
        <div className="fullProduct__images">
            <ul>
                <li  className="fullProduct__imagesList"><img src="" alt=""/></li>
                <li><img src="" alt=""/></li>
                <li><img src="" alt=""/></li>
                <li><img src="" alt=""/></li>
                <li><img src="" alt=""/></li>
                <li><img src="" alt=""/></li>
                <li><img src="" alt=""/></li>
            </ul>
            <img src="" className="fullProduct__mainImage" alt=""/>
        </div>
            <div className="fullProduct__info">
                <h2 className="fullProduct__title"></h2>
                <h4 className="fullProduct__brand"></h4>
                <p className="fullProduct__rating"></p>
                <ul className="fullProduct__params">

                </ul>
                <div className="fullProduct__description">
                    <h3 className="fullProduct__descriptionTitle">About this item</h3>
                    <ul className="fullProduct__descriptionList">
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi asperiores dicta eaque esse ipsum itaque laborum, mollitia pariatur quis quo suscipit tenetur voluptatum! Alias deleniti distinctio error porro voluptatem! Eligendi enim ex itaque perspiciatis sed! Alias aliquam atque consequuntur dignissimos doloremque dolorum eligendi eveniet explicabo, illo molestias omnis porro provident repellendus sunt, velit! Dolores, fugiat, voluptate? A adipisci alias aliquid amet aperiam consectetur dignissimos dolor, ducimus ex facilis inventore iusto laborum natus nemo nulla optio quod ratione repellat ut veniam vero vitae voluptatum? Ab accusantium aperiam corporis distinctio dolore dolorem, eligendi enim, et excepturi explicabo iste itaque minus modi molestiae nisi odit officiis omnis perferendis perspiciatis possimus quas reprehenderit sequi totam unde vel vero voluptate. Atque consectetur cum cumque doloribus et eum fugit harum hic, incidunt ipsum iusto maxime mollitia nam, odit officia tempore unde! Alias amet aspernatur assumenda eum exercitationem id, neque numquam pariatur quia repellat tenetur velit! Ad asperiores beatae, consequatur ex quisquam sit tempora temporibus. Accusamus, ad adipisci at aut culpa dolor dolores dolorum earum est expedita harum illo illum ipsum laborum magni maxime minima molestiae necessitatibus nisi officiis optio perspiciatis praesentium, provident quaerat repellat saepe sapiente sunt totam unde vel velit voluptatem voluptates voluptatum! Ab aliquam consequuntur culpa inventore laudantium maiores tempore? At consectetur consequatur dolorum eos exercitationem, expedita explicabo itaque maiores minima natus numquam omnis perferendis perspiciatis quae repudiandae similique soluta, tenetur vero voluptas voluptatem. Accusantium ad culpa delectus dignissimos distinctio facilis fugiat hic incidunt ipsam, maiores nisi odit officia reprehenderit similique soluta ut voluptatem? A, aut minus non omnis pariatur repellat temporibus veniam? Distinctio dolorum eius, harum illum impedit in inventore itaque magni non officiis quae quam quidem quo quos,
                            reprehenderit sunt voluptates voluptatum? Aliquid animi architecto, atque cum esse illum minus natus nemo possimus quaerat quam repellendus sit suscipit veritatis voluptatem? Eligendi?</li>
                    </ul>
                </div>
            </div>
            <div className="fullProduct__purchase">
                <h3 className="fullProduct__purchaseTittle">Buy used</h3>
                <h3 className="fullProduct__purchaseTittle">Used:</h3>
                <p>Sold by</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default FullProduct;