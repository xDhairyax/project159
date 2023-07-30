AFRAME.registerComponent("comics",{
    init:function(){
        this.placesContainer=this.el
        this.createCards()
    },

    createCards:function(){
        const Thumbnails=[
            {
                id:"thor",
                title:"THOR",
                url:"./assets/thumbnails/thor.jpeg"
            },
            {
                id:"avengers",
                title:"AVENGERS",
                url:"./assets/thumbnails/avengers.jpeg"
            },
            {
                id:"justice-league",
                title:"JUSTICE LEAGUE",
                url:"./assets/thumbnails/justice.jpeg"
            },
            {
                id:"xmen",
                title:"X-MEN",
                url:"./assets/thumbnails/xmen.jpeg"
            },
        ]

        let previousXposition=-60
        for(var item of Thumbnails){
            const posX=previousXposition+25
            const posY=0
            const posZ=-40
            const position={x:posX, y:posY, z:posZ}
            previousXposition=posX

            const borderel=this.createBorder(position,item.id)
            const thumbnail=this.createPoster(item)
            borderel.appendChild(thumbnail)

            const titleEl=this.createTitle(position,item)
            borderel.appendChild(titleEl)

            this.placesContainer.appendChild(borderel)
        }     
    },

    createBorder:function(position,id){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width:22,
            height:30
            
            
        })
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material",{
            color:"white",
           
            
        })
        entityEl.setAttribute("cursor-listener",{})
        return entityEl
    },

    createPoster:function(item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:20,
            height:28
        })
        entityEl.setAttribute("position",{
            x:0,
            y:0,
            z:0.1
        })
        entityEl.setAttribute("material",{
            src:item.url
        })
        return entityEl
    },

    createTitle:function(position,item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:70,
            color:"black",
            value:item.title
        })
        const elPosition=position
        elPosition.y=-25
        entityEl.setAttribute("position",elPosition)
        entityEl.setAttribute("visble",true)
        return entityEl
    }

})