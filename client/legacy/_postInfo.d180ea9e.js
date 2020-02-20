import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, g as element, t as text, h as claim_element, j as children, k as claim_text, l as detach_dev, m as attr_dev, n as add_location, o as insert_dev, p as append_dev, q as noop, r as set_data_dev, u as empty, v as destroy_each, w as space, x as claim_space, y as _slicedToArray } from './client.1fc2b64e.js';

var file = "src/routes/_postInfo.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
} // (12:2) {#each tags as tag}


function create_each_block_1(ctx) {
  var span;
  var t_value =
  /*tag*/
  ctx[7] + "";
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-sm bg-purple-600 text-white p-1 mr-1 text-sm rounded-sm");
      add_location(span, file, 12, 4, 334);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(12:2) {#each tags as tag}",
    ctx: ctx
  });
  return block;
} // (18:2) {#if post.data.author && post.data.author.name}


function create_if_block_1(ctx) {
  var span;
  var t_value =
  /*post*/
  ctx[0].data.author.name + "";
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-sm ");
      add_location(span, file, 18, 4, 499);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*post*/
      1 && t_value !== (t_value =
      /*post*/
      ctx[0].data.author.name + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(18:2) {#if post.data.author && post.data.author.name}",
    ctx: ctx
  });
  return block;
} // (22:2) {#if post.data.author && post.data.author.links}


function create_if_block(ctx) {
  var each_1_anchor;
  var each_value =
  /*post*/
  ctx[0].data.author.links;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*post*/
      1) {
        each_value =
        /*post*/
        ctx[0].data.author.links;

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(22:2) {#if post.data.author && post.data.author.links}",
    ctx: ctx
  });
  return block;
} // (23:4) {#each post.data.author.links as link}


function create_each_block(ctx) {
  var a;
  var i;
  var i_class_value;
  var t;
  var a_href_value;
  var block = {
    c: function create() {
      a = element("a");
      i = element("i");
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a_nodes = children(a);
      i = claim_element(a_nodes, "I", {
        class: true
      });
      children(i).forEach(detach_dev);
      t = claim_space(a_nodes);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(i, "class", i_class_value =
      /*link*/
      ctx[4].icon);
      add_location(i, file, 24, 8, 716);
      attr_dev(a, "href", a_href_value =
      /*link*/
      ctx[4].url);
      attr_dev(a, "target", "__blank");
      attr_dev(a, "class", "");
      add_location(a, file, 23, 6, 662);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, i);
      append_dev(a, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*post*/
      1 && i_class_value !== (i_class_value =
      /*link*/
      ctx[4].icon)) {
        attr_dev(i, "class", i_class_value);
      }

      if (dirty &
      /*post*/
      1 && a_href_value !== (a_href_value =
      /*link*/
      ctx[4].url)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(23:4) {#each post.data.author.links as link}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div;
  var t0;
  var t1;
  var t2;
  var span;
  var t3;
  var t4;
  var hr;
  var each_value_1 =
  /*tags*/
  ctx[1];
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var if_block0 =
  /*post*/
  ctx[0].data.author &&
  /*post*/
  ctx[0].data.author.name && create_if_block_1(ctx);
  var if_block1 =
  /*post*/
  ctx[0].data.author &&
  /*post*/
  ctx[0].data.author.links && create_if_block(ctx);
  var block = {
    c: function create() {
      div = element("div");

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].c();
      }

      t0 = space();
      if (if_block0) if_block0.c();
      t1 = space();
      if (if_block1) if_block1.c();
      t2 = text("\n  ・\n  ");
      span = element("span");
      t3 = text(
      /*shortDate*/
      ctx[2]);
      t4 = space();
      hr = element("hr");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].l(div_nodes);
      }

      t0 = claim_space(div_nodes);
      if (if_block0) if_block0.l(div_nodes);
      t1 = claim_space(div_nodes);
      if (if_block1) if_block1.l(div_nodes);
      t2 = claim_text(div_nodes, "\n  ・\n  ");
      span = claim_element(div_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t3 = claim_text(span_nodes,
      /*shortDate*/
      ctx[2]);
      span_nodes.forEach(detach_dev);
      t4 = claim_space(div_nodes);
      hr = claim_element(div_nodes, "HR", {
        class: true
      });
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-sm");
      add_location(span, file, 29, 2, 777);
      attr_dev(hr, "class", "mb-8 mt-4");
      add_location(hr, file, 30, 2, 820);
      attr_dev(div, "class", "text-gray-600");
      add_location(div, file, 10, 0, 280);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].m(div, null);
      }

      append_dev(div, t0);
      if (if_block0) if_block0.m(div, null);
      append_dev(div, t1);
      if (if_block1) if_block1.m(div, null);
      append_dev(div, t2);
      append_dev(div, span);
      append_dev(span, t3);
      append_dev(div, t4);
      append_dev(div, hr);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*tags*/
      2) {
        each_value_1 =
        /*tags*/
        ctx[1];

        var _i8;

        for (_i8 = 0; _i8 < each_value_1.length; _i8 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i8);

          if (each_blocks[_i8]) {
            each_blocks[_i8].p(child_ctx, dirty);
          } else {
            each_blocks[_i8] = create_each_block_1(child_ctx);

            each_blocks[_i8].c();

            each_blocks[_i8].m(div, t0);
          }
        }

        for (; _i8 < each_blocks.length; _i8 += 1) {
          each_blocks[_i8].d(1);
        }

        each_blocks.length = each_value_1.length;
      }

      if (
      /*post*/
      ctx[0].data.author &&
      /*post*/
      ctx[0].data.author.name) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          if_block0.m(div, t1);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*post*/
      ctx[0].data.author &&
      /*post*/
      ctx[0].data.author.links) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(div, t2);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      destroy_each(each_blocks, detaching);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
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

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

function instance($$self, $$props, $$invalidate) {
  var post = $$props.post;
  var date = post.data.date ? new Date(post.data.date) : null;
  var tags = post.data.tags;
  var shortDate = isValidDate(date) ? date.toLocaleDateString() : "";
  var writable_props = ["post"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<PostInfo> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  $$self.$capture_state = function () {
    return {
      post: post,
      shortDate: shortDate
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
    if ("shortDate" in $$props) $$invalidate(2, shortDate = $$props.shortDate);
  };

  return [post, tags, shortDate];
}

var PostInfo =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(PostInfo, _SvelteComponentDev);

  function PostInfo(options) {
    var _this;

    _classCallCheck(this, PostInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostInfo).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      post: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PostInfo",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*post*/
    ctx[0] === undefined && !("post" in props)) {
      console.warn("<PostInfo> was created without expected prop 'post'");
    }

    return _this;
  }

  _createClass(PostInfo, [{
    key: "post",
    get: function get() {
      throw new Error("<PostInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PostInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return PostInfo;
}(SvelteComponentDev);

export { PostInfo as P };
