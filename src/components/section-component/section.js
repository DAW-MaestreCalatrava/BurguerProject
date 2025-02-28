
class sectionComponent {
    constructor() {
        this.section = document.createElement('section');
        this.section.setAttribute('class', 'section');
    }

    render() {
        return this.section;
    }
}