window.onload = (event) => {
    // 获取所有的pre标签
    const preTags = document.querySelectorAll('pre');

    // 遍历每个pre标签
    preTags.forEach(preTag => {
        // 获取pre标签下的所有子元素
        const childNodes = preTag.childNodes;

        // 判断pre标签下只有一个子元素且为svg标签
        if (childNodes.length === 1 && childNodes[0].nodeName.toLowerCase() === 'svg') {
            // 设置pre标签的css样式
            preTag.style.display = 'grid';
            preTag.style.placeItems = 'center';
        }
    });

    // 消除从plantuml引入的url链接文件中的figcaption标签文字
    const figureTags = document.querySelectorAll('figure');
    figureTags.forEach(figureTag => {
        const childNodes = figureTag.childNodes;
        let imgFlag = false;
        let figcaptionFlag = false;
        let figcaptionNode = null;
        childNodes.forEach(node => {
            if (node.nodeName.toLowerCase() === 'img') {
                imgFlag = true;
            } else if (node.nodeName.toLowerCase() === 'figcaption') {
                figcaptionFlag = true;
                figcaptionNode = node;
            }
        });
        if (imgFlag && figcaptionFlag) {
            figureTag.removeChild(figcaptionNode);
            figureTag.style.display = 'grid';
            figureTag.style.placeItems = 'center';
        }
    })

}