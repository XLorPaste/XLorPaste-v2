import Vue from 'vue';
import {
  Dialog,
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
  MessageBox,
  Option,
  Backtop
} from 'element-ui';

Vue.use(Dialog);
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

Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
