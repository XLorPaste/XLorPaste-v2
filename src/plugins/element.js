import Vue from 'vue';
import {
  Menu,
  MenuItem,
  Input,
  Select,
  Button,
  Form,
  FormItem,
  Row,
  Col,
  Card,
  Message,
  Notification,
  Option,
  Backtop
} from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Option);
Vue.use(Backtop);

Vue.component(CollapseTransition.name, CollapseTransition);

Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
