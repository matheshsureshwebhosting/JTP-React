import React from 'react';
import {BrowserRouter as Route,Link} from 'react-router-dom';


class Value extends React.Component {
    render() {
        return (
            <div>
                <Route></Route>
                <div class="value">
                   {/*  <!-- NAVBAR -->
 */}
                    <nav class="navbar navbar-default navbar-fixed-top" id="navbar">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </button>
                            <Link to="/home" class="navbar-brand">ENKEY'S</Link>
                            </div>
                            <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav navbar-right" >
                            <li><Link to="/home">Home</Link></li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href={"jl"}>About Us<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                <li><Link to="/history">History and facts</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/certificate">Certificates</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/management">Management team</Link></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href={"jl"}>Products/Capabilities<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                <li><Link to="/alumini">Aluminium die cast part</Link></li>
                                <li class="divider"></li>
                                <li><Link to="zinc">Zinc die cast parts</Link></li>
                                <li class="divider"></li>
                                <li><Link to="ferrous">Ferrous precision machined parts</Link></li>
                                <li class="divider"></li>
                                <li><Link to="precision">Precision machined parts</Link></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href={"jl"}>Facilities/Machinery/Equipment<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                <li><Link to="/die">Die casting</Link></li>
                                <li class="divider"></li>
                                <li><Link to="machine">Machining</Link></li>
                                <li class="divider"></li>
                                <li><Link to="quality">Quality Management–System quality,<br/>Product quality,Process Quality</Link></li>
                                <li class="divider"></li>
                                <li><Link to="surface">Surface preparation & protection</Link></li>
                                <li class="divider"></li>
                                <li><Link to="supply">Supply chain management</Link></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href={"jl"}>Engineering capabilities<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                <li><Link to="/tool">Tool room</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/fixture">Fixture manufacturing</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/part">Part Assembly</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/flow">Flow simulation</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/production">Production oriented design</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/value">Value Engineering</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/pre">Pre-launch and prototype support</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/migration">Product migration</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/career">Careers</Link></li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href={"jl"}>Gallery<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                <li><Link to="/product">Product gallery</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/facilities">Facilities/Machinery gallery</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact&Enquiry</Link></li>
                            </ul>
                        </div>
                        </div>
                    </nav>

                   {/*  <!-- NAVBAR END -->

                    <!------ SIDE MENU START ------> */}

                    <div class="icons" id="icons">
                        <Link class="question" id="question" onclick="question()">Enquire Now<i class="fa fa-chevron-up" aria-hidden="true" id="up"></i></Link>
                        <form>
                            <input type="text" placeholder="Your name*" name="" onChange={this.text}/><br/>
                            <input type="email" placeholder="Your e-mail*" name="" onChange={this.email}/><br/>
                            <input type="number" placeholder="Phone*" name="" onChange={this.number}/><br/>
                            <textarea rows="2" cols="20" placeholder="Message*" onChange={this.message}></textarea><br/>
                            <button class="btn" onClick={this.enquire}>Submit</button>
                        </form>
                    </div>

                   {/*  <!------ SIDE MENU END ------>

                    <!-- BANNER --> */}

                    <div class="banner" data-parallax="scroll" data-image-src="assets/img/skult.png">
                        <ul class="breadcrumb">
                            <li class="one"><a href={"jl"}>Home</a></li>
                            <li class="two"><a href={"jl"}>Value-Engineering</a></li>
                        </ul>
                    </div>

                   {/*  <!-- BANNER END -->

                    <!-- SECTION 1 START --> */}
                    <div class="section1">
                        <div class="head">
                            <h2>Steps in Value Engineering</h2>
                        </div>
                        <div class="box">
                            <div class="one">
                                <div class="row">
                                    <div class="col-md-8">
                                        <p>Value engineering refers to the systematic method of improving the value of a product that a project produces. It is used to analyze a service,
                                             system, or product to determine the best way to manage the important functions while reducing the cost.</p>
                                        <p>Most often, value engineering takes place after the <span>completion of the design process, </span> but it is best performed before the design is conducted to
                                             allow the experts to incorporate the option of using alternative materials and methods.</p>
                                    </div>
                                    <div class="col-md-4">
                                        <img src="assets/img/value.jpg" alt="lkj" class="img img-responsive"/>
                                        <h2>Enkey's Value Engineering</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="two">
                                <ul>
                                    <li>Value engineering refers to a systematic approach to improve the value of a project at the lowest cost.</li>
                                    <li>Valuation engineering involves using substitute materials and methods that are less expensive while preserving the functionality of the product.</li>
                                    <li>The concept of value engineering began in the 1940s at General Electric.</li>
                                </ul>
                            </div>
                            <div class="three">
                                <p>Value is calculated as a ratio of function to cost. A business can add value to a product by either cutting down on cost or improving the function. Most
                                     companies use value engineering as a cost-cutting strategy, where the basic function of a product is preserved – not sacrificed – in the process of pursuing value improvement.</p>
                                     <p>From a marketing perspective, value engineering is used to design a product so that it lasts for a specific duration before it becomes obsolete. Usually, when a product is expected to be stylistically
                                          or practically obsolete within a specific duration of time, the manufacturer uses value engineering to save on costs without taking away the intended purpose.</p>
                            </div>
                            <div class="four">
                                <ul class="breadcrumb">
                                    <li>High Precision Machining</li>
                                    <li>High Precision Parts Manufacturers</li>
                                    <li>High Precision Parts Suppliers</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                  {/*   <!-- SECTION 1 END -->

                    <!------ FOOTER START ------> */}

                    <div class="footer">
                            <div class="row">
                                <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                    <h3 class="first-heading">QUICK VIEW</h3>
                                    <ul class="list-unstyled">
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Capabilities</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Certification</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Solution to Customers</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Contuct Us</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                    <h3 class="second-heading">PRODUCTS</h3>
                                    <ul class="list-unstyled">
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Aluminium Pressure Die Casting</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Components</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Aluminium Gravity Die Casting</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Components</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Cast Iron and Nodular Iron</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                    <h3 class="third-heading">MACHINERY</h3>
                                    <ul class="list-unstyled">
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Pressure Die Casting Facilities</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Gravity Die Casting Facilities</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Testing and Measuring Facilities</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Machining Facilities</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Finishing Facilities</a></li>
                                        <li><a href={"jl"}><i class="fa fa-caret-right" aria-hidden="true"></i>Leak Test Facilities</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div class="four">
                                        <h3 class="fourth-heading">GET IN TOUCH</h3>
                                        <ul class="list-unstyled">
                                            <li><p>Any questions?We wil be glad to serve<br/>you by meeting your requirements and<br/>challenges at any geographical location<br/>in the world.</p></li>
                                            <li><textarea rows="4" cols="37"></textarea></li>
                                            <li>
                                                <ul class="list-inline">
                                                    <li><button><i class="fa fa-facebook-official" aria-hidden="true"></i></button></li>
                                                    <li><button><i class="fa fa-youtube-play" aria-hidden="true"></i></button></li>
                                                    <li><button><i class="fa fa-linkedin-square" aria-hidden="true"></i></button></li>
                                                    <li><button><i class="fa fa-twitter-square" aria-hidden="true"></i></button></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>		
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div class="five">
                                        <h3 class="fifth-heading">NEWS LETTER</h3>
                                        <ul class="list-unstyled">
                                            <li class="border"><textarea rows="2" cols="28"></textarea></li>
                                            <li><button>Subscribe</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="copyrights">
                                <div class="container-fluid">
                                    
                                    <summary><b>ENKEY</b> &copy 2020  Deccan Engineering Works. All Rights Reserved. - Site By: <img alt="lkj" src="assets/img/footer-enkey.png"/></summary>
                                </div>
                            </div>
                    </div>

                   {/*  <!------ FOOTER END ------> */}
                </div>
            </div>
        )
    }
}
export default Value;