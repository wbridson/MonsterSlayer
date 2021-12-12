import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#ad9b0c',
                secondary: colors.blueGrey,
                btn: colors.grey.darken4,
                black: colors.shades.black,
                accent: colors.orange,
                error: colors.red,
                warning: colors.pink,
                info: colors.lightBlue,
                success: colors.green,
            }
        }
    }
    
});
