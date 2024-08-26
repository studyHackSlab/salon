document.addEventListener('DOMContentLoaded', (event) => {

    // 花びら start

    // 花びら end

    window.onload = function () {
        const mainvisual = document.querySelector('.mainvisual').children[0];
        // console.log(mainvisual);
        mainvisual.classList.add('show');
    };

    // var fadeConts = document.querySelectorAll('.fadeConts'); // フェードさせる要素の取得
    var fadeConts = document.querySelectorAll('.style1'); // フェードさせる要素の取得
    var fadeContsRect = []; // 要素の位置を取得するための配列
    var fadeContsTop = []; // 要素の位置を取得するための配列

    var product = document.querySelectorAll('.product');
    var productRect = []; // 要素の位置を取得するための配列
    var productTop = []; // 要素の位置を取得するための配列

    var windowY = window.pageYOffset; // ウィンドウのスクロール位置
    var windowH = window.innerHeight; // ウィンドウの高さ
    var remainder = 100; // ちょっとはみ出させる部分

    // 要素の位置を取得
    for (var i = 0; i < fadeConts.length; i++) {
        fadeContsRect.push(fadeConts[i].getBoundingClientRect());
    }
    for (var i = 0; i < fadeContsRect.length; i++) {
        fadeContsTop.push(fadeContsRect[i].top + windowY);
    }

    // 要素の位置を取得
    for (var i = 0; i < product.length; i++) {
        productRect.push(product[i].getBoundingClientRect());
    }
    for (var i = 0; i < productRect.length; i++) {
        productTop.push(productRect[i].top + windowY);
    }

    // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
    window.addEventListener('resize', function () {
        windowH = window.innerHeight;
    });
    // スクロールされたら
    window.addEventListener('scroll', function () {
        // スクロール位置を取得
        windowY = window.pageYOffset;

        for (var i = 0; i < fadeConts.length; i++) {
            // 要素が画面の下端にかかったら
            if (windowY > fadeContsTop[i] - windowH + remainder) {
                // .showを付与
                fadeConts[i].classList.add('show');
            } else {
                // 逆に.showを削除
                fadeConts[i].classList.remove('show');
            }
            // console.log(fadeContsTop[i]);
        }

        console.log(product.length);
        for (var i = 0; i < product.length; i++) {
            // 要素が画面の下端にかかったら
            if (windowY > productTop[i] - windowH + remainder) {
                // .showを付与
                product[i].classList.add('show');
            } else {
                // 逆に.showを削除
                product[i].classList.remove('show');
            }
            // console.log(productTop[i]);
        }

    });

});