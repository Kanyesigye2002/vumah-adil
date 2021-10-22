import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import blogImg2 from '../../../assets/img/blog-img-2.jpg'; 
import blogImg3 from '../../../assets/img/blog-img-3.jpg'; 
import blogImg4 from '../../../assets/img/blog-img-4.jpg'; 

export default function Blog1() {
  return (
    <section class="blog-detail padd-bottom-60 padd-top-60">
        <div class="container">
            <div class="blog-right ">
                <div class="row">
                    <div class="col-md-12">
                        <div class="blog-right-grid mb-5" data-aos="fade-up">
                            <div class="blog-right-image">
                                <img src={blogImg2} alt="blog"/>
                            </div>
                            <h2>Why Travel Is Important Today More Than Ever</h2>

                            <p>
                                Traveling is a very important part of life as it is the best way to get out of
                                the busy work life and a good remedy for stress, anxiety and depression.
                                Improving mental and physical health. Not only does travelling provide the
                                opportunity to experience the beauty of nature
                            </p>

                            <p class="impotant-box">
                                Exploring new places has its advantages, as it allows us to forget our worries,
                                problems, frustrations and fears. This allows us to broaden our horizon and move in
                                new directions, unplugging from the struggles of life and enjoying what the world
                                has to offer, therefore fill your passport full of stamps and create some amazing
                                memories!
                            </p>

                            <h2>These are the top 4 reasons why travelling is so important:</h2>
                        </div>
                        <div class="blog-right-grid mb-5" data-aos="fade-up">
                            <div class="blog-right-image">
                                <img src={blogImg3} alt="blog"/>
                            </div>
                            <h2>1) Exploring new cuisines</h2>

                            <p>
                                Traveling provides the perfect opportunity to try new, great and authentic cuisines from
                                different regions of the world. Bringing you unique flavours which never have
                                experienced before! Don’t forget that travelling is never complete without trying the
                                local food, as you can never truly experience the culture without at least trying what
                                the locals eat. We all enjoy traveling, escaping our comfort zone, meeting new people
                                and creating unforgettable memories. Yet, the best part of all is the food. Experiencing
                                a wide range of authentic flavours would not be possible without visiting these
                                different corners of the world.
                            </p>
                        </div>
                        <div class="blog-right-grid mb-5" data-aos="fade-up">
                            <div class="blog-right-image">
                                <img src={blogImg4} alt="blog"/>
                            </div>
                            <h2>2) New Cultures</h2>

                            <p>
                                Cultures are the characteristics formed by a society through their language, family
                                values, geography and history. Exploring a different culture enriches the mind and soul,
                                as It reinforces a whole experience and provides new perspective. Facing culture shock
                                and having the chance to learn new skills and more about yourself.
                            </p>
                            <p>
                                Often the best way to experience a new culture is by spending some considerable time
                                there. While a short visit may only give you a glimpse,
                            </p>
                            <p>
                                considering experiences such as work exchange programs would allow you more time to
                                immerse yourself in a new culture.
                            </p>
                        </div>
                        <div class="blog-right-grid mb-5" data-aos="fade-up">
                            <h2>3) Self development</h2>

                            <p>
                                Traveling has also become known to be one of the best ways to enhance personal growth.
                                It allows you to escape from your daily routines and step out your comfort zone as you
                                move to a different environment, which gives a sense of independence. Each journey can
                                bring out something out of you and help you find your strengths and weaknesses, learning
                                more about yourself, people and new environments. This is because, traveling sometimes
                                brings challenges and opportunities in such ways that can make you a stronger individua,
                                progressing to a new and better version of yourself. Reinvent yourself and discover who
                                you really are.
                            </p>
                        </div>
                        <div class="blog-right-grid mb-5" data-aos="fade-up">
                            <h2>4) Meeting new people</h2>

                            <p>
                                You can build new friendships and connections with people from different places around
                                the world. Building networks and establishing connections is also one of the biggest
                                benefits of travelling, as it expands your reach which can be a huge advantage in your
                                own personal life. You may meet some people for only a short while but moments like
                                these can be life changing, opening new doors, creating new perspectives and perhaps you
                                will even start learning a new language!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- <div class="row">
                <div class="col-sm-5 col-md-4">
                    <div class="blog-left">
                        <div class="blog-left-common">
                            <h2>SEARCH</h2>
                            <div class="search-field">
                                <input type="search" placeholder="search..."/>
                                <svg viewBox="0 0 11 11">
                                    <g id="loupe" transform="translate(0 0)">
                                        <g id="Group_58" data-name="Group 58" transform="translate(0 0)">
                                            <g id="Group_57" data-name="Group 57">
                                                <path id="Path_48" data-name="Path 48"
                                                    d="M4.844,0A4.844,4.844,0,1,0,9.689,4.844,4.85,4.85,0,0,0,4.844,0Zm0,8.794a3.95,3.95,0,1,1,3.95-3.95A3.954,3.954,0,0,1,4.844,8.794Z" />
                                            </g>
                                        </g>
                                        <g id="Group_60" data-name="Group 60" transform="translate(7.542 7.542)">
                                            <g id="Group_59" data-name="Group 59">
                                                <path id="Path_49" data-name="Path 49"
                                                    d="M354.373,353.74l-2.564-2.564a.447.447,0,0,0-.632.632l2.564,2.564a.447.447,0,1,0,.632-.632Z"
                                                    transform="translate(-351.046 -351.046)" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="blog-left-common">
                            <h2>CATEGORIES</h2>
                            <ul class="category-list">
                                <li><a href="#">Cultural</a></li>
                                <li><a href="#">Lifestyle</a></li>
                                <li><a href="#">Nature & Adventure</a></li>
                                <li><a href="#">Festival & Events</a></li>
                                <li><a href="#">England</a></li>
                                <li><a href="#">Scotland</a></li>
                            </ul>
                        </div>
                        <div class="blog-left-common">
                            <h2>RECENT POSTS</h2>
                            <div class="recent-left-post d-flex mb-3">
                                <div class="recent-left-post-img">
                                    <img src="img/blog-img-1.jpg" alt="blog-image">
                                </div>
                                <div class="recent-left-post-content pl-3">
                                    <h2>Top 5 places to visit
                                        in the UK</h2>
                                    <p>April 24, 2018</p>
                                </div>
                            </div>
                            <div class="recent-left-post d-flex mb-3">
                                <div class="recent-left-post-img">
                                    <img src="img/blog-img-2.jpg" alt="blog-image">
                                </div>
                                <div class="recent-left-post-content pl-3">
                                    <h2>Top 5 places to visit
                                        in the UK</h2>
                                    <p>April 24, 2018</p>
                                </div>
                            </div>
                            <div class="recent-left-post d-flex mb-3">
                                <div class="recent-left-post-img">
                                    <img src="img/blog-img-2.jpg" alt="blog-image">
                                </div>
                                <div class="recent-left-post-content pl-3">
                                    <h2>Top 5 places to visit
                                        in the UK</h2>
                                    <p>April 24, 2018</p>
                                </div>
                            </div>
                        </div>
                        <div class="blog-left-common">
                            <h2>TAGS</h2>
                            <ul class="tag-list">
                                <li><a href="#">Lifestyle</a></li>
                                <li><a href="#">Man</a></li>
                                <li><a href="#">America</a></li>
                                <li><a href="#">UK</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-7 col-md-8">
                   
                </div>
          </div> -->*/}
        </div>
    </section>
  );
}
