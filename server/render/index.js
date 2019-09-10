const fs = require("fs");
const path = require("path");
const render = require("./render").default;
const serialize = require("serialize-javascript")

const template = fs.readFileSync(path.join(__dirname, '../../build/index.html'), { encoding: 'utf8'});

module.exports = (ctx) => {
    const location = ctx.path;
    return render(location).then(
        ({html, state}) => {
            // html 을 넣어주고, state 를 window.__PRELOADED_STATE__ 값으로 설정
            const page = template.replace('<div id="root"></div>', `<div id="root">${html}</div><script>window.__PRELOADED_STATE__=${serialize(state)}</script>`);
            ctx.body = page;
        }
    );
};