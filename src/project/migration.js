import React from 'react';
import {BrowserRouter as Route,Link} from 'react-router-dom';


class Migration extends React.Component {
    render() {
        return (
            <div>
                <Route></Route>
                <div class="migration">
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
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href={"jhgf"}>About Us<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                <li><Link to="/history">History and facts</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/certificate">Certificates</Link></li>
                                <li class="divider"></li>
                                <li><Link to="/management">Management team</Link></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href={"jhgf"}>Products/Capabilities<i class="fa fa-caret-down" aria-hidden="true"></i></a>
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
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href={"jhgf"}>Facilities/Machinery/Equipment<i class="fa fa-caret-down" aria-hidden="true"></i></a>
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
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href={"jhgf"}>Engineering capabilities<i class="fa fa-caret-down" aria-hidden="true"></i></a>
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
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href={"jhgf"}>Gallery<i class="fa fa-caret-down" aria-hidden="true"></i></a>
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
                            <li class="one"><a href={"jhgf"}>Home</a></li>
                            <li class="two"><a href={"jhgf"}>Product-Migration</a></li>
                        </ul>
                    </div>

                   {/*  <!-- BANNER END -->

                    <!-- SECTION 1 START --> */}
                    <div class="section1">
                        <div class="head">
                            <h2>Product-Migration Process</h2>
                        </div>
                        <div class="box">
                            <div class="one">
                                <div class="row">
                                    <div class="col-md-8">
                                        <p>Governments, development specialists, and others have rediscovered the connections between migration and development.
                                             Yet while increasing volumes of research have focused on the actual and potential contributions of migrant communities
                                              to <span>sustainable development or poverty reduction in their countries of origin, </span> the findings have not been systematically
                                               translated into policy guidance. One result is that little coherence is to be found between the development and migration
                                                policies of governments in countries of destination and origin—a reality that the research offered here seeks to address.</p>
                                                <p>MPI publica algunas de sus investigaciones sobre la migración en países hispanohablantes en español. Aquí usted puede encontrar todos los informes,
                                                     artículos y <span>comentarios escritos en español </span> a lo largo de los años.</p>
                                    </div>
                                    <div class="col-md-4">
                                        <img src="assets/img/migration.jpg" alt="hg" class="img img-responsive"/>
                                        <h2>Enkey's Product-Migration</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="two">
                                <ul>
                                    <li>Respuestas latinoamericanas a las crisis migratorias venezolanas y nicaragüenses</li>
                                    <li>Una nueva política migratoria para una nueva era: Una conversación con la Secretaria de Gobernación Olga Sánchez Cordero</li>
                                    <li>Creatividad Dentro de la Crisis: Opciones Legales para Inmigrantes Venezolanos en América Latina</li>
                                    <li>Cambios en el Panorama de Control Migratorio Interno Durante la Administración Trump</li>
                                    <li>La Situación de Cambio Constante entre EE UU y México: Tendencias y Políticas de Migración, Incluyendo Menores No Acompañados</li>
                                    <li>Single parts to large quantities.</li>
                                </ul>
                            </div>
                            <div class="three">
                                <p>Many teams see re-platforming as a temporary pause, a pit shop to tune up the engine so you can accelerate faster later. It 
                                    assumes that ONLY technology has changed since initial decisions were made.</p>
                                    <p>When I was doing product strategy for ReadyTalk’s new video conferencing platform (later branded FoxDen), the team started with an 
                                        initial hypothesis of MVP. We needed video, voice, app share and bling. Yes, our early presentations had the word “bling” in them.
                                         This represented the secret sauce that was going to offer the jump in value that would entice people to switch.</p>
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
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Capabilities</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Certification</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Solution to Customers</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Contuct Us</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                    <h3 class="second-heading">PRODUCTS</h3>
                                    <ul class="list-unstyled">
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Aluminium Pressure Die Casting</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Components</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Aluminium Gravity Die Casting</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Components</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Cast Iron and Nodular Iron</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                    <h3 class="third-heading">MACHINERY</h3>
                                    <ul class="list-unstyled">
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Pressure Die Casting Facilities</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Gravity Die Casting Facilities</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Testing and Measuring Facilities</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Machining Facilities</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Finishing Facilities</a></li>
                                        <li><a href={"jhgf"}><i class="fa fa-caret-right" aria-hidden="true"></i>Leak Test Facilities</a></li>
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
                                    
                                    <summary><b>ENKEY</b> &copy 2020  Deccan Engineering Works. All Rights Reserved. - Site By: <img alt="hg" src="assets/img/footer-enkey.png"/></summary>
                                </div>
                            </div>
                    </div>

                   {/*  <!------ FOOTER END ------> */}
                </div>
            </div>
        )
    }
}
export default Migration;