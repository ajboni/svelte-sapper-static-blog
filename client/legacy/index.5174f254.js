import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, g as element, t as text, w as space, z as create_component, h as claim_element, j as children, k as claim_text, l as detach_dev, x as claim_space, A as claim_component, m as attr_dev, n as add_location, H as HtmlTag, o as insert_dev, p as append_dev, B as mount_component, y as _slicedToArray, r as set_data_dev, C as transition_in, D as transition_out, E as destroy_component, F as validate_store, G as tagFilter, I as component_subscribe, J as posts, K as group_outros, L as check_outros, v as destroy_each, q as noop, M as _asyncToGenerator, N as _regeneratorRuntime, O as tags, P as pageInfo, Q as stores$1, u as empty, R as query_selector_all } from './client.1fc2b64e.js';
import { P as PostInfo } from './_postInfo.d180ea9e.js';

var file = "src/routes/_postListView.svelte";

function create_fragment(ctx) {
  var div2;
  var a0;
  var t0_value =
  /*post*/
  ctx[0].data.title + "";
  var t0;
  var a0_href_value;
  var t1;
  var t2;
  var div1;
  var html_tag;
  var raw_value =
  /*post*/
  ctx[0].excerpt + "";
  var t3;
  var br;
  var t4;
  var div0;
  var a1;
  var t5;
  var a1_href_value;
  var t6;
  var i;
  var current;
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
      div2 = element("div");
      a0 = element("a");
      t0 = text(t0_value);
      t1 = space();
      create_component(postinfo.$$.fragment);
      t2 = space();
      div1 = element("div");
      t3 = space();
      br = element("br");
      t4 = space();
      div0 = element("div");
      a1 = element("a");
      t5 = text("Read more...");
      t6 = space();
      i = element("i");
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      a0 = claim_element(div2_nodes, "A", {
        class: true,
        rel: true,
        href: true
      });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, t0_value);
      a0_nodes.forEach(detach_dev);
      t1 = claim_space(div2_nodes);
      claim_component(postinfo.$$.fragment, div2_nodes);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t3 = claim_space(div1_nodes);
      br = claim_element(div1_nodes, "BR", {});
      t4 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      a1 = claim_element(div0_nodes, "A", {
        href: true
      });
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, "Read more...");
      a1_nodes.forEach(detach_dev);
      t6 = claim_space(div0_nodes);
      i = claim_element(div0_nodes, "I", {
        class: true
      });
      children(i).forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a0, "class", "text-3xl");
      attr_dev(a0, "rel", "prefetch");
      attr_dev(a0, "href", a0_href_value =
      /*post*/
      ctx[0].data.slug);
      add_location(a0, file, 8, 2, 202);
      html_tag = new HtmlTag(raw_value, t3);
      add_location(br, file, 12, 4, 353);
      attr_dev(a1, "href", a1_href_value =
      /*post*/
      ctx[0].data.slug);
      add_location(a1, file, 14, 6, 433);
      attr_dev(i, "class", "fa fa-chevron-circle-right");
      add_location(i, file, 15, 6, 481);
      attr_dev(div0, "class", "text-right text-purple-600 hover:text-purple-700");
      add_location(div0, file, 13, 4, 364);
      attr_dev(div1, "class", "my-4");
      add_location(div1, file, 10, 2, 305);
      attr_dev(div2, "class", " bg-gray-100 flex flex-col mb-10 border-2 rounded-md py-8 shadow-lg\n  px-16 text-lg leading-relaxed");
      add_location(div2, file, 5, 0, 84);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, a0);
      append_dev(a0, t0);
      append_dev(div2, t1);
      mount_component(postinfo, div2, null);
      append_dev(div2, t2);
      append_dev(div2, div1);
      html_tag.m(div1);
      append_dev(div1, t3);
      append_dev(div1, br);
      append_dev(div1, t4);
      append_dev(div1, div0);
      append_dev(div0, a1);
      append_dev(a1, t5);
      append_dev(div0, t6);
      append_dev(div0, i);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*post*/
      1) && t0_value !== (t0_value =
      /*post*/
      ctx[0].data.title + "")) set_data_dev(t0, t0_value);

      if (!current || dirty &
      /*post*/
      1 && a0_href_value !== (a0_href_value =
      /*post*/
      ctx[0].data.slug)) {
        attr_dev(a0, "href", a0_href_value);
      }

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
      ctx[0].excerpt + "")) html_tag.p(raw_value);

      if (!current || dirty &
      /*post*/
      1 && a1_href_value !== (a1_href_value =
      /*post*/
      ctx[0].data.slug)) {
        attr_dev(a1, "href", a1_href_value);
      }
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
      if (detaching) detach_dev(div2);
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

function instance($$self, $$props, $$invalidate) {
  var post = $$props.post;
  var writable_props = ["post"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<PostListView> was created with unknown prop '".concat(key, "'"));
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

var PostListView =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(PostListView, _SvelteComponentDev);

  function PostListView(options) {
    var _this;

    _classCallCheck(this, PostListView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostListView).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      post: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PostListView",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*post*/
    ctx[0] === undefined && !("post" in props)) {
      console.warn("<PostListView> was created without expected prop 'post'");
    }

    return _this;
  }

  _createClass(PostListView, [{
    key: "post",
    get: function get() {
      throw new Error("<PostListView>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PostListView>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return PostListView;
}(SvelteComponentDev);

var file$1 = "src/routes/_postList.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
} // (13:2) {#each $posts as post}


function create_each_block(ctx) {
  var li;
  var t;
  var current;
  var postlistview = new PostListView({
    props: {
      post:
      /*post*/
      ctx[2]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      li = element("li");
      create_component(postlistview.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      claim_component(postlistview.$$.fragment, li_nodes);
      t = claim_space(li_nodes);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(li, file$1, 13, 4, 356);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(postlistview, li, null);
      append_dev(li, t);
      current = true;
    },
    p: function update(ctx, dirty) {
      var postlistview_changes = {};
      if (dirty &
      /*$posts*/
      2) postlistview_changes.post =
      /*post*/
      ctx[2];
      postlistview.$set(postlistview_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(postlistview.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(postlistview.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
      destroy_component(postlistview);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(13:2) {#each $posts as post}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var div;
  var t0;
  var t1_value = (
  /*$tagFilter*/
  ctx[0] ? "about " +
  /*$tagFilter*/
  ctx[0] : "") + "";
  var t1;
  var t2;
  var ul;
  var current;
  var each_value =
  /*$posts*/
  ctx[1];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      div = element("div");
      t0 = text("Recent posts ");
      t1 = text(t1_value);
      t2 = space();
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, "Recent posts ");
      t1 = claim_text(div_nodes, t1_value);
      div_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "text-4xl py-4 sm:pt-4 sm:pb-8 text-center font-medium");
      add_location(div, file$1, 7, 0, 189);
      add_location(ul, file$1, 11, 0, 322);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, t0);
      append_dev(div, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, ul, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*$tagFilter*/
      1) && t1_value !== (t1_value = (
      /*$tagFilter*/
      ctx[0] ? "about " +
      /*$tagFilter*/
      ctx[0] : "") + "")) set_data_dev(t1, t1_value);

      if (dirty &
      /*$posts*/
      2) {
        each_value =
        /*$posts*/
        ctx[1];

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(ul, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(ul);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var $tagFilter;
  var $posts;
  validate_store(tagFilter, "tagFilter");
  component_subscribe($$self, tagFilter, function ($$value) {
    return $$invalidate(0, $tagFilter = $$value);
  });
  validate_store(posts, "posts");
  component_subscribe($$self, posts, function ($$value) {
    return $$invalidate(1, $posts = $$value);
  });

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("$tagFilter" in $$props) tagFilter.set($tagFilter = $$props.$tagFilter);
    if ("$posts" in $$props) posts.set($posts = $$props.$posts);
  };

  return [$tagFilter, $posts];
}

var PostList =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(PostList, _SvelteComponentDev);

  function PostList(options) {
    var _this;

    _classCallCheck(this, PostList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostList).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PostList",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return PostList;
}(SvelteComponentDev);

var file$2 = "src/routes/_spinner.svelte";

function create_fragment$2(ctx) {
  var div2;
  var div0;
  var i;
  var t0;
  var div1;
  var t1;
  var block = {
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      i = element("i");
      t0 = space();
      div1 = element("div");
      t1 = text(
      /*caption*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      i = claim_element(div0_nodes, "I", {
        class: true
      });
      children(i).forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t1 = claim_text(div1_nodes,
      /*caption*/
      ctx[0]);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(i, "class", "fas fa-spinner fa-spin");
      add_location(i, file$2, 6, 4, 120);
      attr_dev(div0, "class", "text-6xl");
      add_location(div0, file$2, 5, 2, 93);
      attr_dev(div1, "class", "");
      add_location(div1, file$2, 8, 2, 168);
      attr_dev(div2, "class", "container mx-auto text-center");
      add_location(div2, file$2, 4, 0, 47);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      append_dev(div0, i);
      append_dev(div2, t0);
      append_dev(div2, div1);
      append_dev(div1, t1);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*caption*/
      1) set_data_dev(t1,
      /*caption*/
      ctx[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var _$$props$caption = $$props.caption,
      caption = _$$props$caption === void 0 ? "" : _$$props$caption;
  var writable_props = ["caption"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Spinner> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("caption" in $$props) $$invalidate(0, caption = $$props.caption);
  };

  $$self.$capture_state = function () {
    return {
      caption: caption
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("caption" in $$props) $$invalidate(0, caption = $$props.caption);
  };

  return [caption];
}

var Spinner =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Spinner, _SvelteComponentDev);

  function Spinner(options) {
    var _this;

    _classCallCheck(this, Spinner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spinner).call(this, options));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      caption: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Spinner",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(Spinner, [{
    key: "caption",
    get: function get() {
      throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Spinner;
}(SvelteComponentDev);

function create_else_block(ctx) {
  var current;
  var postlist = new PostList({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(postlist.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(postlist.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(postlist, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(postlist.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(postlist.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(postlist, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(39:0) {:else}",
    ctx: ctx
  });
  return block;
} // (37:0) {#if $preloading}


function create_if_block(ctx) {
  var current;
  var spinner = new Spinner({
    props: {
      caption: "Loading posts..."
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(spinner.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(spinner.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(spinner, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(spinner.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(spinner.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(spinner, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(37:0) {#if $preloading}",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var t;
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*$preloading*/
    ctx[0]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      t = space();
      if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-10h7psl\"]", document.head);
      head_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      document.title = "Blog";
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index !== previous_block_index) {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function filterByTag(arr, tag) {
  if (!tag || tag === "") {
    return arr;
  }

  arr = arr.filter(function (a) {
    return a.data.tags.includes(tag);
  });
  return arr;
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(_ref3) {
    var host, path, params, query, res, json, processedPosts;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            host = _ref3.host, path = _ref3.path, params = _ref3.params, query = _ref3.query;
            _context.next = 3;
            return this.fetch("index.json");

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            processedPosts = filterByTag(json.contents, query.tag);
            posts.set(processedPosts);
            tags.set(json.tags);
            tagFilter.set(query.tag);
            pageInfo.set({
              host: host,
              path: path,
              params: params,
              query: query
            });
            return _context.abrupt("return", res);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance$3($$self, $$props, $$invalidate) {
  var $preloading;

  var _stores = stores$1(),
      preloading = _stores.preloading,
      page = _stores.page,
      session = _stores.session;

  validate_store(preloading, "preloading");
  component_subscribe($$self, preloading, function (value) {
    return $$invalidate(0, $preloading = value);
  });

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("$preloading" in $$props) preloading.set($preloading = $$props.$preloading);
  };

  return [$preloading, preloading];
}

var Routes =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Routes).call(this, options));
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
export { preload };
