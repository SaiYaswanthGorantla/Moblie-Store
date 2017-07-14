(function () {
    var app = angular.module("MoblieStore", []);
    var iphone = {
        name: "iphone7 plus",
        color: "black",
        memory: "3 GB RAM,128 GB internal",
        price: 62200,
        image: "appleiphone.png",
        isSoldOut: false,
        activeTab:"desicription"

    };
    var samsung = {
        name: "galaxy S8",
        color: "black",
        memory: "6 GB RAM,64 GB internal",
        price: 56000,
        image: "galaxys8.png",
        isSoldOut: false,
        activeTab:"desicription"
    };

    app.controller("StoreController", function () {
        this.moblies = [iphone, samsung];

        this.setActiveTab=function (moblie,tab) {
            moblie.activeTab =tab;

        }
    });

})();