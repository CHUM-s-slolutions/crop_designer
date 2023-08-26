

function cropDesigner() {
    this.image = null;
    this.data = [];
    this.data_old = null;
    this.svgContainer = null;
    this.svgview = null;
    this.tableView = null;
    this.currentRect = null;
    this.isDrawing = false;
    this.startX = 0;
    this.startY = 0;
    this.width = 0;
    this.height = 0;
    this.view_width = 0;
    this.view_height = 0;
    this.selectedPlot = null;
    this.listeners = [];
    this.mx = 0;
    this.my = 0;
    this.selectedElement = null;
    this.tagBox = null;
    this.tag = null;
    this.inputs = null;
    this.store_v = null;

    this.handelPlotMove = (e) => {
        const id = this.selectedPlot.id;
        const rect = this.selectedPlot.children[0].children[0];
        const c1 = this.selectedPlot.children[1];
        const c2 = this.selectedPlot.children[2];

        x = this.startX;
        y = this.startY;


        width = this.width;
        height = this.height;

        svgpoint = this.getSVGPoint(event.clientX, event.clientY)
        const scx = svgpoint.x;
        const scy = svgpoint.y;
        const mx = scx - this.mx;
        const my = scy - this.my;

        if (this.selectedElement.tagName == "circle") {

            if (this.selectedElement.getAttribute('cx') == '0') {
                x = x + mx;
                y = y + my;
            } else {
                width = width + mx;
                height = height + my;
            }
            if (width - x < 20 || height - y < 10 || width > this.view_width - 5 || height > this.view_height - 5) {
                return;
            }
            rect.setAttribute("width", width - x);
            rect.setAttribute("height", height - y);
            c2.setAttribute("cx", width - x);
            c2.setAttribute("cy", height - y);
        } else {
            x = x + mx;
            y = y + my;
            width = width + mx;
            height = height + my;
        }

        if (x < 5 || y < 5 || width > this.view_width - 5 || height > this.view_height - 5) {
            return;
        }








        this.selectedPlot.setAttribute('transform', 'translate(' + x + ' ' + y + ')');
        this.mx = this.mx + mx;
        this.my = this.my + my;
        this.startX = x;
        this.startY = y;
        this.width = width;
        this.height = height;
        const plot = { id: this.selectedPlot.id, tag: this.tag, x1: Math.round(this.startX), y1: Math.round(this.startY), x2: Math.round(this.width), y2: Math.round(this.height) };
        this.updateData(plot);


    }
    this.handlePlotMouseDown = (e) => {
        if (e.target.tagName != 'rect' && e.target.tagName != 'circle') {
            return;
        }
        if (this.selectedPlot) {
            this.removeFGO();
            this.selectedElement = e.target;
            this.selectedElement.style.cursor = 'move';
            document.body.removeEventListener('click', this.handelClickOut);
            document.body.addEventListener("mousemove", this.handelPlotMove);
            document.body.addEventListener("mouseup", this.handlePlotMouseUp);
            document.body.removeEventListener('mousedown', this.handlePlotMouseDown);



            const svgPoint = this.getSVGPoint(event.clientX, event.clientY);
            this.mx = svgPoint.x;
            this.my = svgPoint.y;
        }


    }
    this.handlePlotMouseUp = (e) => {
        e.currentTarget.removeEventListener("mousemove", this.handelPlotMove);
        document.body.addEventListener('mousedown', this.handlePlotMouseDown);
        this.showTagBox();
        this.selectedElement.style.cursor = 'default';
        this.startX = 0;
        this.startY = 0;
        this.width = 0;
        this.height = 0;
        document.body.addEventListener('click', this.handelClickOut);
        e.currentTarget.removeEventListener("mouseup", this.handlePlotMouseUp);

    }


    this.handelClickOut = (e) => {

        if (e.target.tagName == 'image') {
            this.addrec();
            e.currentTarget.removeEventListener('click', this.handelClickOut);
            this.listeners.forEach(eventListener => {
                this.svgview.addEventListener(eventListener.type, eventListener.handler);
            });
            this.removeFGO();
        }

    }
    this.handelClickOnPlot = (e) => {
        if (this.selectedPlot) {

            this.selectedPlot.removeEventListener('mousedown', this.handlePlotMouseDown);
            document.body.removeEventListener('click', this.handelClickOut);
            const child = this.selectedPlot.children;
            const start = child[1];
            const end = child[2];
            const rect = child[0].children[0];
            rect.style.cursor = 'auto';

            rect.style.stroke = "rgb(48, 82, 143)";
            rect.style.strokeWidth = "3";
            rect.style.fill = "rgba(48, 82, 143, 0.2)";
            rect.style.fillOpacity = "0.2";
            start.style.display = "none";
            end.style.display = "none";
        }
        this.selectedPlot = e.currentTarget;
        this.listeners.forEach(eventListener => {
            this.svgview.removeEventListener(eventListener.type, eventListener.handler);
        });
        const crect = this.selectedPlot.children[0].children[0];
        const rectBoundingBox = crect.getBoundingClientRect();

        let x = rectBoundingBox.x;
        let y = rectBoundingBox.y;
        let width = rectBoundingBox.width + x;
        let height = rectBoundingBox.height + y;

        const svgxy = this.getSVGPoint(x, y);
        this.startX = svgxy.x;
        this.startY = svgxy.y;
        this.id = e.currentTarget.id
        this.tag = e.currentTarget.getAttribute('tag');
        const svgwh = this.getSVGPoint(width, height);
        this.width = svgwh.x;
        this.height = svgwh.y;


        this.selectedPlot.addEventListener('mousedown', this.handlePlotMouseDown);
        document.body.addEventListener('click', this.handelClickOut);
        const child = this.selectedPlot.children;
        const start = child[1];
        const end = child[2];
        const rect = child[0].children[0];

        rect.style.stroke = "rgb(254, 0, 0)";
        rect.style.strokeWidth = "3";
        rect.style.fill = "rgba(254, 0, 0)";
        rect.style.fillOpacity = "0.2";
        start.style.display = "block";
        end.style.display = "block";
        this.removeFGO();
        this.showTagBox();





    }
    this.handleDelete = (e) => {
       
        const indexToRemove = this.data.findIndex(item => item.id == this.id);

        if (indexToRemove !== -1) {
            this.data.splice(indexToRemove, 1);
        }
        this.spreadsheet();
        this.addrec();
    }

    this.handelTagchange = (e) => {

        this.tag = e.target.value;
    }
    this.catchKey = (event) => {
        if (event.ctrlKey) {
            if (event.key === "z") {
                if (this.data_old) {
                    const t = this.data;
                    this.data = this.data_old;
                    this.data_old = this.data;
                    this.addrec();
                    this.spreadsheet();
                }
            } else if (event.key === "y") {

            }
        } else if (event.key === "Delete") {
            if (this.selectedPlot) {
                for (const plot of this.data) {
                    if (plot.id == this.selectedPlot.id) {
                        this.data.pop(plot);

                    }
                }
                this.addrec();
                this.spreadsheet();
            }
        }
    }
}

cropDesigner.prototype.removeFGO = function () {
    const foreignObjects = this.svgview.querySelectorAll('foreignObject');

    for (const foreignObject of foreignObjects) {
        this.svgview.removeChild(foreignObject);
    }
    this.tagBox = null;
}
cropDesigner.prototype.showTagBox = function () {

    let x = this.startX;
    let y = this.height + 5;
    let width = 450;
    let height = 150;
    const tag = this.tag;
    if (y + height + 5 > this.view_height) {
        y = this.startY - height + 5;

    }
    if (x + width > this.view_width) {
        y = (this.startY + ((this.height - this.startY) / 2)) - 40;
        x = (this.startX - width) - 5;

    }
    if (this.tagBox) {
        const tagBox = this.tagBox;
        tagBox.setAttribute('x', x);
        tagBox.setAttribute('y', y);
        return;
    } else {
        const tagBox = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        tagBox.classList.add('tag_container');
        tagBox.setAttribute('x', x);
        tagBox.setAttribute('y', y);
        tagBox.setAttribute('width', width);
        tagBox.setAttribute('height', height);
        let text = document.createElement('label');

        text.style.fontSize = "35px";
        text.style.userSelect = "none";
        text.innerHTML = 'タグ名';

        // Create HTML div and input elements
        const div = document.createElement('div');
        div.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
        div.classList.add('tagbox')
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('value', tag);
        input.addEventListener('onchange', this.handelTagchange)
        input.style.cssText = 'width: 100%; height: 70%; border: none; outline: none; font-size: 30px;';

        const saveButton = document.createElement('button');
        saveButton.textContent = '登録';
        saveButton.style.marginRight = '5px';
        saveButton.addEventListener('click', () => {
            this.updateTag(input.value);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '消去';
        deleteButton.addEventListener('click', this.handleDelete);
        deleteButton.style.backgroundColor = "red";

        // Append elements to div

        div.appendChild(input);
        div.appendChild(saveButton);
        div.appendChild(deleteButton);

        // Append div to tagBox
        tagBox.appendChild(text);
        tagBox.appendChild(div);
        this.tagBox = tagBox;
        // Append tagBox to SVG
        this.svgview.appendChild(this.tagBox);
    }


}
cropDesigner.prototype.updateTag = function (tag) {

    for (const tplot of this.data) {
        if (tplot.id == this.selectedPlot.id) {
            tplot.tag = tag;
        }
    }
    this.spreadsheet();
    this.addrec();
}
cropDesigner.prototype.updateData = function (plot) {

    for (const tplot of this.data) {
        if (tplot.id == plot.id) {
            tplot.x1 = plot.x1;
            tplot.y1 = plot.y1;
            tplot.x2 = plot.x2;
            tplot.y2 = plot.y2;
            tplot.tag = plot.tag;
        }
    }
    this.spreadsheet();
}
cropDesigner.prototype.Store = function (store = {
    imgfile: { url: "", mimetype: "", width: "", height: "" },
    entryspec: [{ id: "", tag: "", x1: "", y1: "", x2: "", y2: "" },]
}) {
    this.store_v = store;
    const image = new Image();
    image.src = store.imgfile.url;
    const plotlist = store.entryspec;
    const handleMouseDown = (event) => {
        if (event.target.tagName == 'rect') {
            return;
        }
        this.isDrawing = true;
        const svgPoint = this.getSVGPoint(event.clientX, event.clientY);
        startX = svgPoint.x;
        startY = svgPoint.y;
        this.startX = startX;
        this.startY = startY;
        currentRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        currentRect.setAttribute("x", startX);
        currentRect.setAttribute("y", startY);
        currentRect.setAttribute("width", 0);
        currentRect.setAttribute("height", 0);
        currentRect.style.stroke = "rgb(254, 0, 0)";
        currentRect.style.strokeWidth = "3";
        currentRect.style.fill = "rgba(254, 0, 0)";
        currentRect.style.fillOpacity = "0.2";
        this.currentRect = currentRect;
        this.svgview.appendChild(this.currentRect);
    };
    const handleMouseMove = (event) => {
        if (!this.isDrawing) return;

        const svgPoint = this.getSVGPoint(event.clientX, event.clientY);
        let width = svgPoint.x - startX;
        let height = svgPoint.y - startY;
        if (this.ckNg(width)) {
            let startX = svgPoint.x;
            width = this.width + (this.startX - startX);
            this.startX = startX;
            this.currentRect.setAttribute("x", startX);
        }
        if (this.ckNg(height)) {
            let startY = svgPoint.y;
            height = this.height + (this.startY - startY);
            this.startY = startY;
            this.currentRect.setAttribute("y", startY);
        }
        this.width = width;
        this.height = height;

        this.currentRect.setAttribute("width", this.width);
        this.currentRect.setAttribute("height", this.height);
    };

    const handleMouseUp = () => {
        if (!this.isDrawing) return;

        this.isDrawing = false;
        if (this.width == 0) {
            return;
        }
        let id = this.getid();
        let tag = this.gettag(id);
        let x1 = Math.round(this.startX);
        let y1 = Math.round(this.startY);
        let x2 = Math.round(this.width + x1);
        let y2 = Math.round(this.height + y1);
        let plot = { id, tag, x1, y1, x2, y2 };
        this.data.push(plot);
        this.width = 0;
        this.height = 0;
        this.startX = 0;
        this.startY = 0;

        this.addrec();
        this.spreadsheet();
        this.svgview.removeChild(this.currentRect);
        this.currentRect = null;

    };

    const handleMouseLeave = () => {
        if (!this.isDrawing) return;
        this.svgview.removeChild(this.currentRect);
        this.currentRect = null;
        this.isDrawing = false;
    };


    const eventListeners = [
        { type: "mousedown", handler: handleMouseDown },
        { type: "mousemove", handler: handleMouseMove },
        { type: "mouseup", handler: handleMouseUp },
        { type: "mouseleave", handler: handleMouseLeave }
    ];
    return ({ image: image, plotlist: plotlist, listeners: eventListeners });
}
cropDesigner.prototype.ckNg = function (num) {
    const x = Math.sign(num);
    if (x == '-1') {
        return true;
    } else {
        return false;
    }
}
cropDesigner.prototype.getid = function () {
    let id = 1;
    this.data.forEach(e => {
        id = e.id == id ? id += 1 : id;
    });
    return id;
}
cropDesigner.prototype.gettag = function (id) {
    return `t${id.toString().padStart(3, '0')}`;
}
cropDesigner.prototype.App = function (store, views = { image, table, inputs }) {

    const eventListeners = store.listeners;
    const image = store.image;
    const width = image.width;
    const height = image.height;
    this.view_width = width;
    this.view_height = height;
    this.svgContainer = views.imageView;
    this.tableView = views.tableView;
    const svgview = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svgview.setAttribute("viewBox", "0 0 " + width + " " + height);
    svgview.setAttribute("id", "svg_view");
    const imageElement = document.createElementNS("http://www.w3.org/2000/svg", "image");
    imageElement.setAttribute("width", width);
    imageElement.setAttribute("height", height);
    imageElement.setAttribute("href", image.src);
    svgview.appendChild(imageElement);
    eventListeners.forEach(eventListener => {
        svgview.addEventListener(eventListener.type, eventListener.handler);
    });
    document.addEventListener("keydown", this.catchKey);
    this.listeners = eventListeners;
    this.svgview = svgview;
    this.svgContainer.appendChild(this.svgview);
    this.data = store.plotlist;
    this.inputs = store.inputs;
    this.addrec();
    this.spreadsheet();
    return this;



}
cropDesigner.prototype.getSVGPoint = function (x, y) {
    const svgPoint = this.svgview.createSVGPoint();
    svgPoint.x = x;
    svgPoint.y = y;
    return svgPoint.matrixTransform(this.svgview.getScreenCTM().inverse());
}
cropDesigner.prototype.addrec = function () {
    this.refresh();

    for (const plot of this.data) {

        let width = plot.x2 - plot.x1;
        let height = plot.y2 - plot.y1;
        let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute('transform', 'translate(' + plot.x1 + ' ' + plot.y1 + ')');
        g.setAttribute('id', plot.id);
        g.setAttribute('tag', plot.tag);
        let ig = document.createElementNS("http://www.w3.org/2000/svg", "g");

        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        rect.style.stroke = "rgb(48, 82, 143)";
        rect.style.strokeWidth = "3";
        rect.style.fill = "rgba(48, 82, 143, 0.2)";

        let rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect2.setAttribute("width", "30");
        rect2.setAttribute("height", "30");
        rect2.style.fill = "rgba(48, 82, 143)";
        let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("x", "15");
        text.setAttribute("y", "20");
        text.style.fill = "#fff";
        text.style.fontSize = "16";
        text.style.userSelect = "none";
        text.innerHTML = plot.id;

        let start = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        let end = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        start.setAttribute("fill", "#fff");
        start.setAttribute("stroke", "#fe0000");
        start.setAttribute("stroke-width", "2");
        start.setAttribute("r", "8");
        start.setAttribute("cx", "0");
        start.setAttribute("cy", "0");
        start.setAttribute("style", "cursor: move; display: none;");

        end.setAttribute("fill", "#fff");
        end.setAttribute("stroke", "#fe0000");
        end.setAttribute("stroke-width", "2");
        end.setAttribute("r", "8");
        end.setAttribute("cx", width);
        end.setAttribute("cy", height);
        end.setAttribute("style", "cursor: move; display: none;");


        ig.appendChild(rect);
        ig.appendChild(rect2);
        ig.appendChild(text);
        g.appendChild(ig);
        g.appendChild(start);
        g.appendChild(end);

        g.addEventListener("click", this.handelClickOnPlot);
        this.svgview.appendChild(g);

    }


}
cropDesigner.prototype.refresh = function () {

    this.mx = 0;
    this.my = 0;
    this.startX = 0;
    this.startY = 0;
    this.width = 0;
    this.height = 0;
    const tagName = "g";

    const g_arr = [];
    for (let i = 0; i < this.svgview.children.length; i++) {
        const child = this.svgview.children[i];
        if (child.tagName == tagName) {
            g_arr.push(child);
        }
    }
    g_arr.forEach(element => {
        this.svgview.removeChild(element);
    });
    this.removeFGO();
}
cropDesigner.prototype.spreadsheet = function () {
    this.tableView.innerHTML = "";
    const cropper = this;
    let index = 0;
    this.data.forEach(plot => {
        const id = document.createElement('input');
        id.type = 'hidden';
        id.name = `id`;
        id.value = plot.id;
        id.setAttribute('data_index', index);

        const tag = document.createElement('input');
        tag.type = 'hidden';
        tag.name = `tag`;
        tag.value = plot.tag;
        tag.setAttribute('data_index', index);

        const x1 = document.createElement('input');
        x1.type = 'hidden';
        x1.name = `x1`;
        x1.value = plot.x1;
        x1.setAttribute('data_index', index);

        const y1 = document.createElement('input');
        y1.type = 'hidden';
        y1.name = `y1`;
        y1.value = plot.y1;
        y1.setAttribute('data_index', index);


        const x2 = document.createElement('input');
        x2.type = 'hidden';
        x2.name = `x2`;
        x2.value = plot.x2;
        x2.setAttribute('data_index', index);

        const y2 = document.createElement('input');
        y2.type = 'hidden';
        y2.name = `y2`;
        y2.value = plot.y2;
        y2.setAttribute('data_index', index);

        this.tableView.appendChild(id);
        this.tableView.appendChild(tag);
        this.tableView.appendChild(x1);
        this.tableView.appendChild(y1);
        this.tableView.appendChild(x2);
        this.tableView.appendChild(y2);

        index++;


    });
    const jexcelInstance = jspreadsheet(this.tableView, {
        data: this.data,
        columns: [
            {
                type: 'number',
                title: 'PLOT ID',
                readOnly: true,
                width: 80
            },
            {
                type: 'text',
                title: 'タグ名',
                width: 120,

            },
            {
                type: 'numeric',
                title: 'x1',
                width: 60
            },
            {
                type: 'numeric',
                title: 'y1',
                width: 60
            },
            {
                type: 'numeric',
                title: 'x2',
                width: 60
            },
            {
                type: 'numeric',
                decimal: ',',
                title: 'y2',
                width: 60
            },
        ],
        onbeforechange: function () {
            this.data_old = jexcelInstance.getJson();

        },
        oninsertrow: function () {
            ref();
        },
        ondeleterow: function () {
            const newData = jexcelInstance.getJson();
            rec(newData);
        },
        oninsertcolumn: function () {

            ref();
        },
        ondeletecolumn: function () {

            ref();
        },
        onmerge: function () {

            ref();
        },
        onchangeheader: function () {

            ref();
        },
        onundo: function () {
            const newData = jexcelInstance.getJson();
            rec(newData);
        },
        onredo: function () {
            const newData = jexcelInstance.getJson();
            rec(newData);
        },
        onchange: function (value) {

            const newData = jexcelInstance.getJson();
            rec(newData);
        },
        onpaste: function () {
            const newData = jexcelInstance.getJson();
            rec(newData);
        }


    });
    function ref() {
        cropper.spreadsheet();
    }
    function rec(data) {
        cropper.data = data;
        cropper.addrec();
    }
}
cropDesigner.prototype.toJSON = function () {
    const json = this.store_v;
    json.entryspec = this.data;

    return JSON.stringify(json);
}
