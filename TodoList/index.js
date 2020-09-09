        let count = 0;
        const mainDiv = document.getElementById('main-content');

        function createElement(element) {
            return document.createElement(element);
        }

        function createTextNode(data) {
            return document.createTextNode(data);
        }

        function setAttribute(element, attributeName, attributeValue) {
            element.setAttribute(attributeName, attributeValue);

        }

        function addId(element, id) {
            element.id = id
        }

        function checkOrUncheck(elem){
            if(elem.innerHTML=='check'){     
                elem.innerHTML="";            
                document.getElementById(elem.id).innerHTML="close";
            }else{
               document.getElementById(elem.id).innerHTML="check";
               alert('inside check');
            }
        }

        function saveMyTodoData(todo) {
            const divWithClassRow = createElement('div');
            setAttribute(divWithClassRow, 'class', 'row');

            const divOfColEleven = createElement('div');
            setAttribute(divOfColEleven, 'class', 'col s11 z-depth-5');

            const divofCard = createElement('div');
            setAttribute(divofCard, 'class', 'card blue-grey darken-1');

            const divWithCardContent = createElement('div');
            setAttribute(divWithCardContent, 'class', 'card-content white-text');

       
            const paragraph = createElement('p');
            const text = createTextNode(todo);

            const divWithI = createElement('div');
            setAttribute(divWithI, 'class', 's1');

            const iTag = createElement('i');
            setAttribute(iTag, 'class', 'material-icons');
            addId(iTag,"i_"+count);
            setAttribute(iTag, 'onclick', 'checkOrUncheck(this)');
             
            const valueOfITag=createTextNode('check');

            appendChild(mainDiv, divWithClassRow);
            appendChild(divWithClassRow, divOfColEleven);
            appendChild(divOfColEleven, divofCard);
            appendChild(divofCard, divWithCardContent);
            appendChild(divWithCardContent, paragraph);
            appendChild(paragraph, text);
            appendChild(divWithClassRow,divWithI);
            appendChild(divWithI,iTag);
            iTag.appendChild(valueOfITag);
            count++;
        }