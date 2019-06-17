/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/components/test.js":
/*!****************************************!*\
  !*** ./src/scripts/components/test.js ***!
  \****************************************/
/*! exports provided: tw, hk, kr, hi, th */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tw\", function() { return tw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hk\", function() { return hk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kr\", function() { return kr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hi\", function() { return hi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"th\", function() { return th; });\nlet card = {\n  title: '',\n  url: '',\n  img: '',\n  comment: '',\n  recommended: false,\n  star: 1,\n  starLast: 1,\n  price: '1,020' // 1>0 2 3> 4 5>1 補starLast 後面空星的辦法 用 5-(star+1)\n\n};\nlet blogCard = {\n  title: '',\n  url: '',\n  img: ''\n};\nlet tw = {\n  topic1: [{\n    title: '【15%割引】台北101展望台ファストパス入場券',\n    url: 'https://www.kkday.com/ja/product/18783',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_18783/20180330033645_rgNC4/jpg',\n    comment: '「当日窓口で購入するよりお得な上、早く上に上がれます！」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '3,514'\n  }, {\n    title: '【日本語ガイド】九份と十分・ランタン飛ばしツアー',\n    url: 'https://www.kkday.com/ja/product/19850',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_19850/20180828052421_FfDJX/png',\n    comment: '「日本語が堪能なガイドさんで、丁寧に面白く説明下さり楽しかったです」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '7,580'\n  }, {\n    title: '台北近郊・貸切チャーター車1日ツアー',\n    url: 'https://www.kkday.com/ja/product/2885',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_20546/20181112014344_YDKkr/jpeg',\n    comment: '「充実した観光が出来ました。 時短したい方はぜひぜひオススメ。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '11,026'\n  }, {\n    title: '九份・野柳・十分1日ツアー：九份お茶プランあり',\n    url: 'https://www.kkday.com/ja/product/2287',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_19510/20180619043138_UPigW/jpeg',\n    comment: '「リーズナブルなのに九份の海悦にてお茶も予約できて最高のツアーでした。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '2,050'\n  }],\n  topic2: [{\n    title: '【九份で台湾茶】海悦楼茶坊：東方美人茶セット',\n    url: 'https://www.kkday.com/ja/product/17728',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_18943/20180126090717_CaxMm/jpeg',\n    comment: '「入れ方を教わって2回目以降は自分で入れるスタイルで、おもしろかったです。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '1,374'\n  }, {\n    title: '【台北近郊】陶器の街・鶯歌で陶芸DIY体験',\n    url: 'https://www.kkday.com/ja/product/18731',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_18731/20180502104607_Q7kaH/jpg',\n    comment: '「老街の雰囲気も楽しめるし、良い思い出ができました。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '965'\n  }, {\n    title: 'KKdayオリジナル！鼎泰豊 小籠包セットプラン',\n    url: 'https://www.kkday.com/ja/product/20076',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_20076/20181116081818_gbNZa/jpg',\n    comment: '「長蛇の列を尻目に優先入場でき、料理の内容、量共に満足でした。」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '2,756'\n  }, {\n    title: '再春健康生活舘：マッサージ＆リンパデトックス',\n    url: 'https://www.kkday.com/ja/product/11072',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_11072/20170221101437_cAkoK/jpg',\n    comment: '「建物もきれいだし、スタッフのみなさんの感じも良かったです！」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '3,101'\n  }],\n  topic3: [{\n    title: '【外国人限定】台湾新幹線 2 / 3日乗り放題パス',\n    url: 'https://www.kkday.com/ja/product/2700',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_16435/20170809074748_4zVu4/jpeg',\n    comment: '「一般のチケットよりもお得！ 購入して良かったです。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '7,160'\n  }, {\n    title: '【往復割引】桃園空港リムジンバス乗車チケット',\n    url: 'https://www.kkday.com/ja/product/12049',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_12049/20180115085747_8ofmQ/jpg',\n    comment: '「深夜でもQRでサクッと発券でき、とても便利です。 」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '827'\n  }, {\n    title: '【台北観光】2階建てオープントップバス乗車券',\n    url: 'https://www.kkday.com/ja/product/10851',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_10851/20170124082410_tAHYA/png',\n    comment: '「オープントップは景色が良くて、気持ちよかったです！」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '930'\n  }, {\n    title: '桃園国際空港－台北市内：貸切片道送迎プラン',\n    url: 'https://www.kkday.com/ja/product/1781',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_12806/20170718045248_WEfbX/jpeg',\n    comment: '「ホテル入口まで直接行けるのは、現地に行ってから更に安心感があります。 」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '2,777'\n  }],\n  blog: [{\n    title: '3泊4日で台湾旅行へ行こう！初心者におすすめ台北観光モデルコース',\n    url: 'https://jp.blog.kkday.com/12042/34-asia-taiwan-taipei-4day-travelplan/',\n    img: 'https://jp.blog.kkday.com/wp-content/uploads/12042_-Taiwan-model-plan_FB.jpg'\n  }, {\n    title: '台湾旅行でプチ贅沢！？台北で超人気のレストラン紹介',\n    url: 'https://jp.blog.kkday.com/4849/10-taipei-restaurant/',\n    img: 'https://jp.blog.kkday.com/wp-content/uploads/4849_Taiwan-restaurant_FB.jpg'\n  }, {\n    title: '【台湾・九份】行き方から散策ルート、お土産、グルメまでを徹底ガイド！',\n    url: 'https://jp.blog.kkday.com/22183/asia-taiwan-jiufen-guide/',\n    img: 'https://jp.blog.kkday.com/wp-content/uploads/22183_九份観光__FB.jpg'\n  }],\n  more: 'https://www.kkday.com/ja/product/productlist/A01-001'\n};\nlet hk = {\n  topic1: [{\n    title: '【日本語ガイド】ビクトリアピーク夜景ツアー',\n    url: 'https://www.kkday.com/ja/product/23057',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_23057/20190416070729_biCvt/jpg',\n    comment: '「ガイドの方に写真も撮って貰えていい思い出になりました。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '5,404'\n  }, {\n    title: '【夜景】シンフォニーオブライツ船上鑑賞プラン',\n    url: 'https://www.kkday.com/ja/product/23601',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_23601/20190501074807_wquT3/jpg',\n    comment: 'ギネスに登録された世界最大の光と音のショーをクルーズで！',\n    recommended: true,\n    star: 0,\n    starLast: 1,\n    price: '4,991'\n  }, {\n    title: '【日本語ガイド】インスタ映え香港まち歩きツアー',\n    url: 'https://www.kkday.com/ja/product/23509',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_23509/20190426060743_qfxHf/jpg',\n    comment: '香取慎吾さんが手掛けた話題のウォールアートを見に行こう！',\n    recommended: true,\n    star: 0,\n    starLast: 1,\n    price: '6,397'\n  }, {\n    title: '【日本語ガイド】モーニング香港・午前市内観光',\n    url: 'https://www.kkday.com/ja/product/23503',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_23503/20190425122301_1EGUa/jpg',\n    comment: '人気のトラムに乗車！ビクトリアピークへ行く午前半日プランです。',\n    recommended: true,\n    star: 0,\n    starLast: 1,\n    price: '5,408'\n  }],\n  topic2: [{\n    title: '【ドリンク飲み放題】クルーザー夜景鑑賞プラン',\n    url: 'https://www.kkday.com/ja/product/19917',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_19917/20181109084948_KEw5D/jpg',\n    comment: '「ビール片手に夜風に吹かれ香港の夜景を楽しみました。」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '2,260'\n  }, {\n    title: 'ジャンボ・キングダム：ランチ / ディナー予約',\n    url: 'https://www.kkday.com/ja/product/23297',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_23297/20190418135434_c92Ek/jpg',\n    comment: '映画の舞台のような海上レストランで、特別なお食事をどうぞ！',\n    recommended: true,\n    star: 0,\n    starLast: 1,\n    price: '3,883'\n  }, {\n    title: '中国式帆船：ダックリング号（鴨霊号）乗船券',\n    url: 'https://www.kkday.com/ja/product/4242',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_4242/20170210032132_mdu5c/jpg',\n    comment: '「シンフォニーオブライツが見れ、香港の夜景を堪能できたのでよかったです。」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '2,095'\n  }, {\n    title: '【2階席確約】クリスタルバス：ランチ / ディナー',\n    url: 'https://www.kkday.com/ja/product/11464',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_11464/20180829095956_4ny8s/jpg',\n    comment: '「バスの快適性・豪華さ、点心の料理、スタッフのサービスなど満足でした。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '4,853'\n  }],\n  topic3: [{\n    title: '【特別価格】香港ディズニーランド入場チケット',\n    url: 'https://www.kkday.com/ja/product/2301',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_18070/20181122020839_cSYVT/jpg',\n    comment: '「QRコードだけで入園できるので、とても便利です。ゲートで紙の券も貰えます。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '7,480'\n  }, {\n    title: '【特別価格】香港ディズニーランドお食事チケット',\n    url: 'https://www.kkday.com/ja/product/20967',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_20967/20181219095448_zODWO/jpeg',\n    comment: '「年パス割引よりお得に食事が出来るのでオススメです♪ 」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '1,234'\n  }, {\n    title: '香港ディズニーホテル：キャラクター点心ランチ',\n    url: 'https://www.kkday.com/ja/product/23313',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_23313/20190419072017_Hl9w1/jpg',\n    comment: 'キュートな見た目はもちろん、本格点心で味覚も大満足です！',\n    recommended: true,\n    star: 0,\n    starLast: 1,\n    price: '6,072'\n  }, {\n    title: '1日プリンセス！ビビディ・バビディ・ブティック',\n    url: 'https://www.kkday.com/ja/product/10322',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_10322/20170208040832_4raZb/jpg',\n    comment: '「体験されたお子さんは一生の思い出に残ると思います。」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '13,137'\n  }],\n  blog: [{\n    title: '香港ディズニーランドで思いっきり楽しもう！チケットからアトラクション・グッズまで完全ガイド',\n    url: 'https://jp.blog.kkday.com/3108/6-hongkong-disneyland/',\n    img: 'https://jp.blog.kkday.com/wp-content/uploads/3108_hongkong-disneyland_FB.jpg'\n  }, {\n    title: '2泊3日香港ナイトライフを満喫するモデルコース',\n    url: 'https://jp.blog.kkday.com/15484/81-hongkong-3day-travelplan/',\n    img: 'https://i0.wp.com/jp.blog.kkday.com/wp-content/uploads/15484_hongkong-3day-travelplan_FB.jpg?fit=1200%2C630&ssl=1'\n  }, {\n    title: '香港旅行の基本情報',\n    url: 'https://jp.blog.kkday.com/15165/67-hk-basic-info/',\n    img: 'https://jp.blog.kkday.com/wp-content/uploads/15165_hongkong-basicinfo_FB.jpg'\n  }],\n  more: 'https://www.kkday.com/ja/product/productlist/A01-005'\n};\nlet kr = {\n  topic1: [{\n    title: '【割引価格】ロッテワールド1日入場チケット',\n    url: 'https://www.kkday.com/ja/product/2948',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_24894/20190530031831_7xzEg/png',\n    comment: '「入場料とフリーパスが付いてこの価格はとってもお得に感じました。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '2,732'\n  }, {\n    title: '【外国人限定】エバーランド1日フリーパス',\n    url: 'https://www.kkday.com/ja/product/2914',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_13900/20180703102750_3NrSc/jpg',\n    comment: '「窓口に並んで入場券に交換することなくすいすい入れました。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '2,835'\n  }, {\n    title: 'NANTA（ナンタ）鑑賞チケット：明洞 / 弘大劇場',\n    url: 'https://www.kkday.com/ja/product/4715',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_4715/20160203084220_ppmCm/jpg',\n    comment: '「コメディ要素もあるので、音楽に詳しくなくても楽しめると思います！」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '2,744'\n  }, {\n    title: '【20%割引】Jump 鑑賞チケット：ソウル公演',\n    url: 'https://www.kkday.com/ja/product/3738',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_17696/20190610040632_h4Rem/jpg',\n    comment: '「とても楽しいショーでした！ 言葉がわからなくても全然問題ないです^_^ 」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '2,600'\n  }],\n  topic2: [{\n    title: '【景福宮すぐそば】韓服（ハンボッ）レンタル',\n    url: 'https://www.kkday.com/ja/product/11731',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_11731/20180523101459_OX0mF/jpg',\n    comment: '「試着も2回出来て、選ぶことが出来たのが良かったです。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '1,829'\n  }, {\n    title: '【最上級エステ】O HUI SPA（オフィ・スパ）',\n    url: 'https://www.kkday.com/ja/product/9491',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_9491/20161028063232_BRE1s/jpg',\n    comment: '「フェイシャルは気持ちよく、化粧品の香りと併せて、最高のリラックスタイムでした。」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '9,146'\n  }, {\n    title: '韓流スター体験！ヘアメイク込みの写真撮影プラン',\n    url: 'https://www.kkday.com/ja/product/3438',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_3438/20181203033121_XpztY/jpg',\n    comment: '「髪型・メイクについても希望通り以上で、プロの力に驚きました。」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '2,171'\n  }, {\n    title: '【キムチ・トッポギ作り】ソウルキムチ文化体験館',\n    url: 'https://www.kkday.com/ja/product/2776',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_13867/20170726143601_2cUWk/jpeg',\n    comment: '「出来上がったキムチをお土産に、韓服体験も出来ていい体験が出来ました。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '1,222'\n  }],\n  topic3: [{\n    title: \"【割引価格】韓国空港鉄道A'REX片道乗車きっぷ\",\n    url: 'https://www.kkday.com/ja/product/2878',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_13931/20170802095541_ENnSd/jpeg',\n    comment: '「WiFiも使えて座ってゆっくりできました♪」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '492'\n  }, {\n    title: 'KALリムジン片道乗車券：仁川空港－ソウル市内',\n    url: 'https://www.kkday.com/ja/product/4052',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_12273/20170621084454_E7dem/png',\n    comment: '「車内のシート間の幅が広く前の人がリクライニングしても快適でした。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '1,258'\n  }, {\n    title: 'KTXほか乗り放題！KORAIL PASS 韓国鉄道周遊券',\n    url: 'https://www.kkday.com/ja/product/2930',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_2930/20180302030024_ynRPh/jpg',\n    comment: '「事前に乗る電車も指定できて良かったです。お安く購入出来ました！」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '10,150'\n  }, {\n    title: '仁川国際空港－ソウル市内：貸切片道送迎プラン',\n    url: 'https://www.kkday.com/ja/product/7085',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_19437/20180523065405_LJLqB/jpg',\n    comment: '「予約が簡単、安心して利用しました、おすすめです。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '6,898'\n  }],\n  blog: [{\n    title: '釜山観光を思いっきり満喫できる3泊4日のモデルコース！',\n    url: 'https://jp.blog.kkday.com/10672/30-korea-busan-4days-travelplan/',\n    img: 'https://i0.wp.com/jp.blog.kkday.com/wp-content/uploads/10672_korea-busan-4days_FB.jpg?fit=1200%2C630&ssl=1'\n  }, {\n    title: '女子旅におすすめ！ソウル旅行でやるべき10のこと',\n    url: 'https://jp.blog.kkday.com/19958/asia-korea-seoul-must-do/',\n    img: 'https://i2.wp.com/jp.blog.kkday.com/wp-content/uploads/19958_seoul-must-do_FB.jpg?fit=1200%2C630&ssl=1'\n  }, {\n    title: '【韓國】大人気遊園地・エバーランドの遊び方を徹底ガイド！',\n    url: 'https://jp.blog.kkday.com/22998/asia-korea-themepark-everland/',\n    img: 'https://jp.blog.kkday.com/wp-content/uploads/22998_korea-everland_FB-1.jpg'\n  }],\n  more: 'https://www.kkday.com/ja/product/productlist/A01-004'\n};\nlet hi = {\n  topic1: [{\n    title: 'クアロア・ランチ1日ツアー：乗馬 / バギー選択',\n    url: 'https://www.kkday.com/ja/product/8323',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_8323/20160524032956_1BrZH/jpg',\n    comment: '「大自然の中での乗馬はインストラクターが付くので初めてでも安心です。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '19,796'\n  }, {\n    title: 'ウミガメに会おう！オアフ島ノースショアめぐり',\n    url: 'https://www.kkday.com/ja/product/24464',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_24464/20190524020927_xbPRj/jpg',\n    comment: '安心日本語ガイドとめぐる8名様限定のゆったりツアーです。',\n    recommended: true,\n    star: 0,\n    starLast: 1,\n    price: '10,313'\n  }, {\n    title: 'マウイ島1日ツアー：ラハイナ＋アオ渓谷州立公園',\n    url: 'https://www.kkday.com/ja/product/8190',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_8190/20160517064941_1Dras/jpg',\n    comment: '日帰りに便利な空港発着プラン。ラハイナとイアオ渓谷へ！',\n    recommended: true,\n    star: 0,\n    starLast: 1,\n    price: '14,656'\n  }, {\n    title: 'ハワイ島の見どころをぎゅっと詰め込んだお得なツアー！',\n    url: 'https://www.kkday.com/ja/product/8177',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_8177/20160517034111_tQSER/jpg',\n    comment: '【世界遺産】ハワイ火山国立公園1日ツアー',\n    recommended: true,\n    star: 5,\n    starLast: 0,\n    price: '14,656'\n  }],\n  topic2: [{\n    title: 'オアフ島サーフィン個人レッスン：ホテル送迎付き',\n    url: 'https://www.kkday.com/ja/product/18421',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_18421/20180420094941_iKent/jpg',\n    comment: 'サーファーの聖地、ワイキキビーチでサーフィンに挑戦！',\n    recommended: true,\n    star: 5,\n    starLast: 0,\n    price: '13,539'\n  }, {\n    title: 'オアフ島ヘリコプター遊覧飛行：ホテル送迎付き',\n    url: 'https://www.kkday.com/ja/product/18448',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_18448/20190520015513_4zDMI/jpg',\n    comment: 'あの映画で有名な渓谷など、オアフ島の絶景を空からどうぞ！',\n    recommended: true,\n    star: 5,\n    starLast: 0,\n    price: '27,077'\n  }, {\n    title: 'ハナウマ湾シュノーケリング体験：ワイキキ発',\n    url: 'https://www.kkday.com/ja/product/18481',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_18481/20180420092302_nIDLX/jpg',\n    comment: 'ホテル送迎付きで4つの出発時間から選べる格安半日プラン！',\n    recommended: true,\n    star: 5,\n    starLast: 0,\n    price: '2,985'\n  }, {\n    title: '【ライセンス不要】オアフ島ダイビング体験',\n    url: 'https://www.kkday.com/ja/product/18454',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_18454/20180420092548_rEAdp/jpg',\n    comment: 'ワイキキでお手軽体験。冒険気分が高まること間違いなし！',\n    recommended: true,\n    star: 4,\n    starLast: 1,\n    price: '10,473'\n  }],\n  topic3: [{\n    title: 'ホノルル空港－ワイキキ地区：乗合片道送迎プラン',\n    url: 'https://www.kkday.com/ja/product/18471',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_18471/20171218080545_6rjl2/jpg',\n    comment: '「 安いし、時間通りだし、また利用したいです！」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '1,492'\n  }, {\n    title: '【ハワイ必携】ゴー・オアフ・カード：1 / 2 / 3日',\n    url: 'https://www.kkday.com/ja/product/18470',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_23964/20190527075446_h6KhV/jpg',\n    comment: '初回利用から14日以内有効、フレキシブルに旅を楽しめる！',\n    recommended: true,\n    star: 5,\n    starLast: 0,\n    price: '7,623'\n  }, {\n    title: 'スターオブホノルル号サンセットディナークルーズ',\n    url: 'https://www.kkday.com/ja/product/18489',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_18489/20180423042100_rJ0T7/jpg',\n    comment: '毎日運行、金曜は花火鑑賞も！船上イベントも充実！',\n    recommended: true,\n    star: 4,\n    starLast: 1,\n    price: '16,176'\n  }, {\n    title: 'マジック・オブ・ポリネシア鑑賞＋お食事プラン',\n    url: 'https://www.kkday.com/ja/product/18465',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_18465/20180423041623_KhCoH/jpg',\n    comment: '「他所の現地アクティビティより格段に安かったです。」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '6,824'\n  }],\n  blog: [{\n    title: '【ハワイ】マリンスポーツからショッピングまでハワイ旅行で絶対にやるべきこと10選',\n    url: 'https://jp.blog.kkday.com/20538/america-usa-hawaii-must-do/',\n    img: 'https://i2.wp.com/jp.blog.kkday.com/wp-content/uploads/20538_must-do_FB.jpg?fit=1200%2C630&ssl=1'\n  }, {\n    title: '【ハワイ】ワイキキだけじゃない！オアフ島を満喫する4日間のモデルコース',\n    url: 'https://jp.blog.kkday.com/20753/america-usa-hawaii-4days-travelplan/',\n    img: 'https://i1.wp.com/jp.blog.kkday.com/wp-content/uploads/20753_hawaii-4days-plan_FB.jpg?fit=1200%2C630&ssl=1'\n  }, {\n    title: '【ハワイ】渡航前に知っておくべきハワイの基本情報',\n    url: 'https://jp.blog.kkday.com/19895/america-usa-hawaii-basic-info/',\n    img: 'https://jp.blog.kkday.com/wp-content/uploads/19895_usa-hawaii-basic-info_FB.jpg'\n  }],\n  more: 'https://www.kkday.com/ja/product/productlist/A05-001?city=A05-001-00011'\n};\nlet th = {\n  topic1: [{\n    title: 'ピピ島・バンブー島1日ツアー：プーケット発',\n    url: 'https://www.kkday.com/ja/product/3847',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_3847/20170106091908_EPPRt/jpg',\n    comment: '「シュノーケリングで魚もたくさん見れるしピピ島いろいろ巡れて大満足です」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '6,100'\n  }, {\n    title: '世界遺産・古都アユタヤ1日ツアー：バンコク発',\n    url: 'https://www.kkday.com/ja/product/18532',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_18532/20180420063712_OhUWh/jpg',\n    comment: '「1日楽しめてこの値段は安すぎるくらいです。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '4,250'\n  }, {\n    title: 'ジェームスボンド島・パンガー湾1日ツアー：プーケット発',\n    url: 'https://www.kkday.com/ja/product/3848',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_19956/20180913045138_JwJvM/jpg',\n    comment: '「カヌー体験は楽しかった、とてもお得のツアーです」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '4,245'\n  }, {\n    title: 'タイ北部・チェンラーイ1日ツアー：チェンマイ発',\n    url: 'https://www.kkday.com/ja/product/20850',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_3284/20170927134505_PSnxe/jpg',\n    comment: '「お寺、博物館と首長族の村で一日たっぷりの観光で大満足です」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '3,068'\n  }],\n  topic2: [{\n    title: '【日本語ガイド】スポット厳選バンコク1日ツアー',\n    url: 'https://www.kkday.com/ja/product/9912',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_9912/20170819021805_8JASs/jpg',\n    comment: '「内容もアテンドも5☆！お得すぎるツアー。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '3,010'\n  }, {\n    title: \"【バンコク】人気マッサージ店：Let's Relax Spa\",\n    url: 'https://www.kkday.com/ja/product/9024',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_19089/20180227052618_Qh43H/jpeg',\n    comment: '「施設きれいでマッサージも気持ち良かったです。」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '2,021'\n  }, {\n    title: '【バンコク】日替わりメニューのタイ料理教室',\n    url: 'https://www.kkday.com/ja/product/9789',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_9789/20180302110251_W5jzB/jpg',\n    comment: '「説明分かりやすく、出来上がった料理は本格的で、参加して良かった。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '4,281'\n  }, {\n    title: '40%割引！バンコク：ディナービュッフェクルーズ',\n    url: 'https://www.kkday.com/ja/product/2567',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_2567/20170909004624_hsr8B/jpg',\n    comment: '「夜景も綺麗で料理も美味しく楽しい時間を過ごした。 」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '2,956'\n  }],\n  topic3: [{\n    title: 'タイ2大空港－バンコク市内：貸切片道送迎プラン',\n    url: 'https://www.kkday.com/ja/product/3431',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_3431/20171218103126_H76mA/jpg',\n    comment: '「タクシーより安心出来ました。価格も安くて良かったです。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '2,610'\n  }, {\n    title: 'バンコク空港 / 市内－パタヤ空港 / 市内：貸切送迎',\n    url: 'https://www.kkday.com/ja/product/18945',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_18945/20180503043543_3qIE7/jpg',\n    comment: '「今回は空港～パタヤ利用した、快適で安心な旅行を楽しむことができました。」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '5,882'\n  }, {\n    title: 'タイ格安ポケットWi-Fi：バンコク2大空港受取',\n    url: 'https://www.kkday.com/ja/product/19417',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_19417/20180518102246_3Q7TL/jpg',\n    comment: '「場所分かりやすく、価格も安い。Wi-Fiはどこでもサクサクと利用できました。」',\n    recommended: false,\n    star: 4,\n    starLast: 1,\n    price: '414'\n  }, {\n    title: '8日間4G使い放題SIM：スワンナプーム空港受取',\n    url: 'https://www.kkday.com/ja/product/18346',\n    img: 'https://image.kkday.com/v2/image/get/h_650%2Cc_fit%2Cq_55%2Ct_jpg/s1.kkday.com/product_18346/20171229155946_lr0Cb/jpg',\n    comment: '「日本で借りるより圧倒的に安く速度も問題ありません！」',\n    recommended: false,\n    star: 5,\n    starLast: 0,\n    price: '837'\n  }],\n  blog: [{\n    title: '【タイ】バンコクで訪れるべき10大定番スポット（2019年版）',\n    url: 'https://jp.blog.kkday.com/22043/asia-thailand-bangkok-must-go/',\n    img: 'https://i0.wp.com/jp.blog.kkday.com/wp-content/uploads/22043_曼谷景點_FB.jpg?fit=1200%2C630&ssl=1'\n  }, {\n    title: '【タイ】バンコクで買うべきお土産とおすすめショッピングスポット',\n    url: 'https://jp.blog.kkday.com/21950/asia-thailand-bangkok-must-buy/',\n    img: 'https://i2.wp.com/jp.blog.kkday.com/wp-content/uploads/21950_曼谷必買_FB.jpg?fit=1200%2C630&ssl=1'\n  }, {\n    title: '【タイ】夏はやっぱり海へ行こう。タイの6大ビーチでアイランドホッピング',\n    url: 'https://jp.blog.kkday.com/15654/91-thailand-island-water-sport/',\n    img: 'https://i0.wp.com/jp.blog.kkday.com/wp-content/uploads/15654_泰國island_FB.jpg?fit=1200%2C630&ssl=1'\n  }],\n  more: 'https://www.kkday.com/ja/product/productlist/A01-010'\n};\n\n\n//# sourceURL=webpack:///./src/scripts/components/test.js?");

/***/ }),

/***/ "./src/scripts/page.js":
/*!*****************************!*\
  !*** ./src/scripts/page.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/test.js */ \"./src/scripts/components/test.js\");\n // console.log('hello')\n// sayHi('John') // Hello, John!\n// sayBye('John') // Bye, John!\n\nlet app = new Vue({\n  el: '#app',\n  data: {\n    twTopic1: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"tw\"].topic1,\n    twTopic2: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"tw\"].topic2,\n    twTopic3: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"tw\"].topic3,\n    twBlog: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"tw\"].blog,\n    hkTopic1: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"hk\"].topic1,\n    hkTopic2: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"hk\"].topic2,\n    hkTopic3: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"hk\"].topic3,\n    hkBlog: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"hk\"].blog,\n    krTopic1: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"kr\"].topic1,\n    krTopic2: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"kr\"].topic2,\n    krTopic3: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"kr\"].topic3,\n    krBlog: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"kr\"].blog,\n    hiTopic1: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"hi\"].topic1,\n    hiTopic2: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"hi\"].topic2,\n    hiTopic3: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"hi\"].topic3,\n    hiBlog: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"hi\"].blog,\n    thTopic1: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"th\"].topic1,\n    thTopic2: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"th\"].topic2,\n    thTopic3: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"th\"].topic3,\n    thBlog: _components_test_js__WEBPACK_IMPORTED_MODULE_0__[\"th\"].blog\n  }\n}); // (function(){\n//   let intro1 = document.getElementById('intro1')\n//   setTimeout(() => {\n//     TweenMax.to(intro1, 0.5, {\n//       x:0\n//     })\n//   }, 1000);\n// }())\n//滾動\n// document.getElementById('scroll').addEventListener('click', ()=>{\n//   window.scrollTo({ \n//       top: $('#sec-inner').offset().top - 50, \n//       behavior: \"smooth\" \n//   });\n// })\n// document.getElementById('nav').addEventListener('click', ()=>{\n//   let toggleBtn = document.getElementById('nav')\n//   let isOpen = toggleBtn.classList.contains('on')\n//   if(isOpen) {\n//     toggleBtn.classList.remove('on')\n//   } else {\n//     toggleBtn.classList.add('on')\n//   }\n// })\n\n//# sourceURL=webpack:///./src/scripts/page.js?");

/***/ })

/******/ });