---
layout: docs
title: Orange megamenu
group: components
---

Add the `.mega-menu` class to the nav tag, `.nav-menu` onto the nav links container. Each item with a sub menu will have the same classes as the [dropdowns](/components/dropdowns/)

{% example html %}
<nav id="main_nav" class="navbar mega-menu" role="navigation">
			<div class="container">
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-toggleable-xs" id="bs-example-navbar-collapse-1">
					<button type="button" class="navbar-toggler hidden-sm-up" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#"><img src="../../assets/img/logo-orange.png" alt="Link to the homepage"></a>
                        <ul class="nav navbar-nav nav-menu">
						  <li class="nav-item dropdown">
                            <a href="#" title="open the news menu" class="nav-link dropdown-toggle active" data-toggle="dropdown"><span class="sr-only">open the </span>News <b class="caret" aria-hidden="true"></b><span class="sr-only"> menu</span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <div class="row mega-menu-content">
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <ul>
                                                <li><a href="#">news type 1</a></li>
                                                <li><a href="#">news type 2</a></li>
                                                <li><a href="#">news type 3</a></li>
                                                <li><a href="#">news type 4</a></li>
                                                <li><a href="#">news type 5</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <ul>
                                                <li><a href="#">news type 6</a></li>
                                                <li><a href="#">news type 7</a></li>
                                                <li><a href="#">news type 8</a></li>
                                                <li><a href="#">news type 9</a></li>
                                                <li><a href="#">news type 10</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <ul>
                                                <li><a href="#">news type 11</a></li>
                                                <li><a href="#">news type 12</a></li>
                                                <li><a href="#">news type 13</a></li>
                                                <li><a href="#">news type 14</a></li>
                                                <li><a href="#">news type 15</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <img alt="" style="height: 180px; display: block;" src="images/index.svg">
                                        </div>
                                        <a role="button" class="pull-right" href="#" title="close the menu">
                                            <span class="sr-only">close the menu</span><span class="glyphicon glyphicon-remove"></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown ">
                            <a href="#" title="open the shop menu" class="nav-link dropdown-toggle active" data-toggle="dropdown"><span class="sr-only">open the </span>Shop <b class="caret" aria-hidden="true"></b><span class="sr-only"> menu</span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <div class="row mega-menu-content">
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <ul>
                                                <li><a href="#">action type 1</a></li>
                                                <li><a href="#">action type 2</a></li>
                                                <li><a href="#">action type 3</a></li>
                                                <li><a href="#">action type 4</a></li>
                                                <li><a href="#">action type 5</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <ul>
                                                <li><a href="#">action type 6</a></li>
                                                <li><a href="#">action type 7</a></li>
                                                <li><a href="#">action type 8</a></li>
                                                <li><a href="#">action type 9</a></li>
                                                <li><a href="#">action type 10</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <ul>
                                                <li><a href="#">action type 11</a></li>
                                                <li><a href="#">action type 12</a></li>
                                                <li><a href="#">action type 13</a></li>
                                                <li><a href="#">action type 14</a></li>
                                                <li><a href="#">action type 15</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <img alt="" style="height: 180px; display: block;" src="images/index.svg">
                                        </div>
                                        <a role="button" class="pull-right" href="#" title="close the menu">
                                            <span class="sr-only">close the menu</span><span class="glyphicon glyphicon-remove"></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
						<li class="nav-item"><a href="#" class="nav-link">Services</a></li>
						<li class="nav-item"><a href="#" class="nav-link">Support</a></li>
						<li class="nav-item"><a href="#" class="nav-link">Business</a></li>
						<li class="nav-item dropdown">
							<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button">Dropdown <b class="caret" aria-hidden="true"></b></a>
							<ul class="dropdown-menu" role="menu">
								<li role="presentation"><a class="dropdown-item" href="#" role="menuitem">Action</a></li>
								<li role="presentation"><a class="dropdown-item" href="#" role="menuitem">Another action</a></li>
								<li role="presentation"><a class="dropdown-item" href="#" role="menuitem">Something else here</a></li>
								<li role="presentation" class="dropdown-divider"></li>
								<li role="presentation"><a class="dropdown-item" href="#" role="menuitem">Separated link</a></li>
							</ul>
						</li>
                        <li class="nav-item dropdown">
                            <a href="#" title="open the news menu" class="nav-link dropdown-toggle active" data-toggle="dropdown"><span class="sr-only">open the </span>News <b class="caret" aria-hidden="true"></b><span class="sr-only"> menu</span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <div class="row mega-menu-content">
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <ul>
                                                <li><a href="#">news type 1</a></li>
                                                <li><a href="#">news type 2</a></li>
                                                <li><a href="#">news type 3</a></li>
                                                <li><a href="#">news type 4</a></li>
                                                <li><a href="#">news type 5</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <ul>
                                                <li><a href="#">news type 6</a></li>
                                                <li><a href="#">news type 7</a></li>
                                                <li><a href="#">news type 8</a></li>
                                                <li><a href="#">news type 9</a></li>
                                                <li><a href="#">news type 10</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <ul>
                                                <li><a href="#">news type 11</a></li>
                                                <li><a href="#">news type 12</a></li>
                                                <li><a href="#">news type 13</a></li>
                                                <li><a href="#">news type 14</a></li>
                                                <li><a href="#">news type 15</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <img alt="" style="height: 180px; display: block;" src="images/index.svg">
                                        </div>
                                        <a role="button" class="pull-right" href="#" title="close the menu">
                                            <span class="sr-only">close the menu</span><span class="glyphicon glyphicon-remove"></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
						<li class="nav-item" id="id_for_cdu_link"></li>
					</ul>
				</div><!-- /.navbar-collapse -->
			</div><!-- /.container-fluid -->
		</nav>
{% endexample %}