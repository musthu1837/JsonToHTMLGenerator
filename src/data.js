export default {
    "data": [
        {
            "type": "div",
            "id": "container",
            "styles": {
                "fontFamily": "sans-serif",
                "display": "flex",
                "flexDirection": "column",
                "background": "rgb(7, 47, 70)",
                "margin": "1%"
            },
            "events": {
                "onClick": function(e){
                    console.log(e)
                },
            },           
            "children": [
                {
                    "type": "header",
                    "id": "header",
                    "innerHTML": "header",
                    "styles": {
                        "display": "flex",
                        "flexDirection": "column",
                        "width": "98%",
                        "background": "blue",
                        "textAlign": "center",
                        "padding": "1%"
                    },
                    "events": {
                        "onClick": function(e){
                            console.log(e)
                        },
                    }
                },
                {
                    "type": "div",
                    "id": "row",
                    "events": {
                        "onClick": function(e){
                            console.log(e)
                        },
                    },
                    "children": [
                        {
                            "type": "nav",
                            "id": "nav",
                            "innerHTML": "nav",
                            "styles": {
                                "display": "flex",
                                "flexDirection": "row",
                                "flexBasis": "20%",
                                "background": "lightskyblue",
                                "color": "White",
                                "textAlign": "center",
                                "padding": "14% 0% 14% 0%",
                                "margin": "12px 0px 12px 0px"
                            },
                            "events": {
                                "onClick": function(e){
                                    console.log(e)
                                },
                            },
                        },
                        {
                            "type": "div",
                            "id": "mainContent",
                            "innerHTML": "Main Content",
                            "styles": {
                                "display": "flex",
                                "flexDirection": "row",
                                "flexBasis": "60%",
                                "background": "grey",
                                "color": "White",
                                "textAlign": "center",
                                "padding": "14% 0% 14% 0%",
                                "margin": "12px 12px"
                            },
                            "events": {
                                "onClick": function(e){
                                    console.log(e)
                                },
                            }
                        },
                        {
                            "type": "aside",
                            "id": "aside",
                            "innerHTML": "SideBar",
                            "styles": {
                                "display": "flex",
                                "flexDirection": "row",
                                "flexBasis": "20%",
                                "background": "lightskyblue",
                                "color": "White",
                                "textAlign": "center",
                                "padding": "14% 0% 14% 0%",
                                "margin": "12px 0px 12px 0px"
                            },
                            "events": {
                                "onClick": function(e){
                                    console.log(e)
                                },
                            }
                        }
                    ]
                },
                {
                    "type": "footer",
                    "id": "footer",
                    "innerHTML": "footer",
                    "styles": {
                        "display": "flex",
                        "flexDirection": "column",
                        "width": "98%",
                        "background": "blue",
                        "textAlign": "center",
                        "padding": "1%"
                    },
                    "events": {
                        "onClick": function(e){
                            console.log(e)
                        },
                    }
                }
            ]
        }
    ]
}