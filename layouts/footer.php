<!-- Footer Start -->
<footer>
            <div class="col-md-12 col-sm-12 text-left"
                style="background-color: #222; color: #fff; font-size: 12px; padding: 40px; border-top: 3px solid #99cc66; vertical-align: top; margin: 40px 0px 0px;">
                <span style="font-size: 14px;">
                    <a class="white" href="/about">О проекте</a>&nbsp;&nbsp;&nbsp;
                    <a class="white" href="mailto:d.filatov@list.ru">Обратная связь</a>&nbsp;&nbsp;&nbsp;
                    <a rel="nofollow" target="_blank" class="white"
                        href="https://yasobe.ru/na/zarplata_programmistu">Помощь разработчику
                        сайта</a>&nbsp;&nbsp;&nbsp;
                    <a class="white" href="/news">Лента новостей</a>&nbsp;&nbsp;&nbsp;
                    <a class="white" href="/reklama">Реклама</a>&nbsp;&nbsp;&nbsp;
                    <a class="white" href="http://hockeyland.ru">Хоккей</a></span>
                <br><br>
                <noindex>

                    <!-- Rating@Mail.ru counter -->
                    <noscript>
                        <img src="//top-fwz1.mail.ru/counter?id=1086861;js=na"
                            style="border:0;position:absolute;left:-9999px;" alt="" />
                    </noscript>
                    <!-- //Rating@Mail.ru counter -->

                    <!-- Rating@Mail.ru logo -->
                    <a rel="nofollow" href="https://top.mail.ru/jump?from=1086861">
                        <img src="//top-fwz1.mail.ru/counter?id=1086861;t=479;l=1" style="border:0;" height="31"
                            width="88" alt="Рейтинг@Mail.ru" /></a>
                    <!-- //Rating@Mail.ru logo -->

                    &nbsp;&nbsp;&nbsp;
                    <!--LiveInternet logo--><a rel="nofollow" href="//www.liveinternet.ru/click" target="_blank"><img
                            src="//counter.yadro.ru/logo?42.12" title="LiveInternet" alt="" border="0" width="31"
                            height="31" /></a>
                    <!--/LiveInternet-->
                    <!--LiveInternet counter-->
                    <script type="text/javascript">
                        new Image().src = "//counter.yadro.ru/hit?r" +
                            escape(document.referrer) + ((typeof (screen) == "undefined") ? "" :
                                ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ?
                                    screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) +
                            ";h" + escape(document.title.substring(0, 150)) +
                            ";" + Math.random();
                    </script>
                    <!--/LiveInternet-->

                    <!-- BEGIN ADVERTSERVE CODE CATFISH -->
                    <div id="mLAXNbmB"></div>
                    <!-- END ADVERTSERVE CODE -->
                </noindex>
                <br>
                <font color="#a9a9a9">© 2007–2020 г. «<a class="grey" href="https://soccerland.ru">Футбольная
                        страна</a>» — ежедневное издание о футболе
                    <br>Размещение рекламы: <a class="grey" href="mailto:d.filatov@list.ru">d.filatov@list.ru</a>
                    <br><a class="grey" rel="nofollow"
                        href="https://zen.yandex.ru/id/5d187df3cd798600ae29e8b5">Яндекс.Дзен</a>
                </font>
            </div>
        </footer>
    </div>

    <div class="modal" id="register" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">

                <div class="nav-tabs clearfix">
                    <div onclick="$('.auth-block form').hide();$($(this).data('target')).show();$('.nav-tab-item').removeClass('active');$(this).addClass('active')"
                        data-target="#registration-form" class="nav-tab-item active">Регистрация</div>
                    <div onclick="$('.auth-block form').hide();$($(this).data('target')).show();$('.nav-tab-item').removeClass('active');$(this).addClass('active')"
                        data-target="#login-form" class="nav-tab-item">Авторизация</div>
                </div>
                <div class="auth-block">
                    <form id="registration-form" action="/user/index/register" method="post">
                        <input type="hidden" name="_csrf-frontend"
                            value="soLGVLgl7J4T9KzIJ-iQzqeyYsmp-CXLE3PxijxXgqTc5KwliHLZ_1i1moljr9ynisVQ_MOKT_lJCZjVVTTr5g==">
                        <div class="form-group field-user-email required">
                            <label class="control-label" for="user-email">Email</label>
                            <input type="text" id="user-email" class="form-control" name="User[email]"
                                autocomplete="off" aria-required="true">

                            <div class="help-block"></div>
                        </div>
                        <div class="form-group field-user-username required">
                            <label class="control-label" for="user-username">Имя на формуе</label>
                            <input type="text" id="user-username" class="form-control" name="User[username]"
                                autocomplete="off" autofocus aria-required="true">

                            <div class="help-block"></div>
                        </div>
                        <div class="form-group field-user-newpassword">
                            <label class="control-label" for="user-newpassword">Пароль</label>
                            <input type="password" id="user-newpassword" class="form-control" name="User[newPassword]">

                            <div class="help-block"></div>
                        </div>
                        <div class="modal-control">
                            <div class="btn-group">
                                <button type="button" data-dismiss="modal" class="btn btn-default">&times;</button>
                                <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
                            </div>
                        </div>
                    </form>
                    <form id="login-form" action="/user/index/login" method="post" style="display:none">
                        <input type="hidden" name="_csrf-frontend"
                            value="soLGVLgl7J4T9KzIJ-iQzqeyYsmp-CXLE3PxijxXgqTc5KwliHLZ_1i1moljr9ynisVQ_MOKT_lJCZjVVTTr5g==">
                        <div class="form-group field-formlogin-email required">
                            <label class="control-label" for="formlogin-email">Email / Username</label>
                            <input type="text" id="formlogin-email" class="form-control" name="FormLogin[email]"
                                autocomplete="off" aria-required="true">

                            <div class="help-block"></div>
                        </div>
                        <div class="form-group field-formlogin-password required">
                            <label class="control-label" for="formlogin-password">Пароль</label>
                            <input type="password" id="formlogin-password" class="form-control"
                                name="FormLogin[password]" aria-required="true">

                            <div class="help-block"></div>
                        </div>
                        <div class="form-group field-formlogin-rememberme">

                            <input type="hidden" name="FormLogin[rememberMe]" value="0"><label><input type="checkbox"
                                    id="formlogin-rememberme" name="FormLogin[rememberMe]" value="1" checked> Remember
                                Me</label>

                            <div class="help-block"></div>
                        </div>
                        <div class="modal-control">
                            <div class="btn-group">
                                <button type="button" data-dismiss="modal" class="btn btn-default">&times;</button>
                                <button type="submit" class="btn btn-primary">Войти</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <style>

    </style>
    <script src="/js/index.js?v=1557172403"></script>
</body>

</html>
<!-- Footer End -->