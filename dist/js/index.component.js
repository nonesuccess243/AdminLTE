var MessageMenu =  {
    props:['messages'],
    template: `<!-- Messages: style can be found in dropdown.less-->
    <li class="dropdown messages-menu">
      <!-- Menu toggle button -->
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        <i class="fa fa-envelope-o"></i>
        <span class="label label-success">{{messages.length}}</span>
      </a>
      <ul class="dropdown-menu">
        <li class="header">您有{{messages.length}}条未读消息</li>
        <li>
          <!-- inner menu: contains the messages -->
          <ul class="menu">
            <li v-for="message in messages"><!-- start message -->
              <a href="#">
                <div class="pull-left">
                  <!-- User Image -->
                  <img :src="message.img" class="img-circle" alt="User Image">
                </div>
                <!-- Message title and timestamp -->
                <h4>
                  {{message.title}}
                  <small><i class="fa fa-clock-o"></i> {{message.timestamp}}</small>
                </h4>
                <!-- The message -->
                <p>{{message.content}}</p>
              </a>
            </li>
            <!-- end message -->
          </ul>
          <!-- /.menu -->
        </li>
        <li class="footer"><a href="#">查看全部消息</a></li>
      </ul>
    </li>
    <!-- /.messages-menu -->`
  };