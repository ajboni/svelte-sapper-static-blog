import { M as _asyncToGenerator, N as _regeneratorRuntime, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, w as space, g as element, t as text, z as create_component, R as query_selector_all, l as detach_dev, x as claim_space, h as claim_element, j as children, k as claim_text, A as claim_component, m as attr_dev, n as add_location, o as insert_dev, p as append_dev, B as mount_component, y as _slicedToArray, r as set_data_dev, C as transition_in, D as transition_out, E as destroy_component } from './client.1fc2b64e.js';
import { P as PostInfo } from './_postInfo.d180ea9e.js';

var file = "src/routes/[slug].svelte";

function create_fragment(ctx) {
  var title_value;
  var t0;
  var div1;
  var h1;
  var t1_value =
  /*post*/
  ctx[0].data.title + "";
  var t1;
  var t2;
  var t3;
  var div0;
  var raw_value =
  /*post*/
  ctx[0].content + "";
  var current;
  document.title = title_value =
  /*post*/
  ctx[0].data.title;
  var postinfo = new PostInfo({
    props: {
      post:
      /*post*/
      ctx[0]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      div1 = element("div");
      h1 = element("h1");
      t1 = text(t1_value);
      t2 = space();
      create_component(postinfo.$$.fragment);
      t3 = space();
      div0 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1any9pj\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, t1_value);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      claim_component(postinfo.$$.fragment, div1_nodes);
      t3 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "text-4xl font-thin");
      add_location(h1, file, 47, 2, 1076);
      attr_dev(div0, "class", "post-content svelte-z75mjw");
      add_location(div0, file, 49, 2, 1154);
      attr_dev(div1, "class", " bg-gray-100 flex flex-col border-2 rounded-md shadow-lg px-8 py-8\n  sm:py-16 sm:px-16 text-lg leading-relaxed w-full break-words");
      add_location(div1, file, 43, 0, 927);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, h1);
      append_dev(h1, t1);
      append_dev(div1, t2);
      mount_component(postinfo, div1, null);
      append_dev(div1, t3);
      append_dev(div1, div0);
      div0.innerHTML = raw_value;
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*post*/
      1) && title_value !== (title_value =
      /*post*/
      ctx[0].data.title)) {
        document.title = title_value;
      }

      if ((!current || dirty &
      /*post*/
      1) && t1_value !== (t1_value =
      /*post*/
      ctx[0].data.title + "")) set_data_dev(t1, t1_value);
      var postinfo_changes = {};
      if (dirty &
      /*post*/
      1) postinfo_changes.post =
      /*post*/
      ctx[0];
      postinfo.$set(postinfo_changes);
      if ((!current || dirty &
      /*post*/
      1) && raw_value !== (raw_value =
      /*post*/
      ctx[0].content + "")) div0.innerHTML = raw_value;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(postinfo.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(postinfo.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div1);
      destroy_component(postinfo);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(_ref3) {
    var params, query, res, data;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref3.params, query = _ref3.query;
            _context.next = 3;
            return this.fetch("".concat(params.slug, ".json"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              post: data
            });

          case 11:
            this.error(res.status, data.message);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var post = $$props.post;
  var writable_props = ["post"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bslugu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  $$self.$capture_state = function () {
    return {
      post: post
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  return [post];
}

var U5Bslugu5D =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(U5Bslugu5D, _SvelteComponentDev);

  function U5Bslugu5D(options) {
    var _this;

    _classCallCheck(this, U5Bslugu5D);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(U5Bslugu5D).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      post: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bslugu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*post*/
    ctx[0] === undefined && !("post" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'post'");
    }

    return _this;
  }

  _createClass(U5Bslugu5D, [{
    key: "post",
    get: function get() {
      throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bslugu5D;
}(SvelteComponentDev);

export default U5Bslugu5D;
export { preload };
