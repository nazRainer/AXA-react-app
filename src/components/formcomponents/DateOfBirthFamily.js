import React, { Component } from 'react';

class DateOfBirthFamily extends Component {
    constructor(props) {
        super(props);
        this.updateState = props.updateState;
        this.incrementPage = props.incrementPage;
        this.state = {
            memberCount: 2,
            completeCount: 0,
            memberList: [],
            familyArray: ["Wife", "Husband" , "Son", "Daughter"],
            childArray: ["Son", "Daughter"],
            result: {},
            class: 'warning-bar disabled'
        }
        this.addMember = this.addMember.bind(this);
        this.removeMember = this.removeMember.bind(this);
        this.incrementCompleteCount = this.incrementCompleteCount.bind(this);
        this.proceed = this.proceed.bind(this);
        this.updateRootComponent = this.updateRootComponent.bind(this);
    }

    updateRootComponent(obj) {
        this.setState(obj);
    }

    addMember() {
        this.setState((prevState) => ({'memberList': [...prevState.memberList, (<DateOfBirthFamilyRow
            key={prevState.memberList.length + 2}
            idNum={prevState.memberList.length + 2}
            updateState={this.updateState}
            incrementPage={this.incrementPage}
            familyArray={this.state.childArray}
            incrementCompleteCount={this.incrementCompleteCount}
            updateRootComponent={this.updateRootComponent}
        />)], 'familyArray': prevState.familyArray, memberCount: prevState.memberCount + 1
        }))
    }

    removeMember() {
        if (this.state.memberCount > 2) {
            if (Object.keys(this.state.result).length === this.state.memberCount) {
                let obj = Object.assign({}, this.state.result);
                delete obj[`member-${Object.keys(obj).length - 1}`];
                this.setState((prevState) => ({
                    'memberList': [...prevState.memberList.slice(0, prevState.memberList.length - 1)], 
                    'familyArray': prevState.familyArray,
                    'result': obj,
                    memberCount: prevState.memberCount - 1,
                    completeCount: prevState.completeCount - 1,
                }))
            } else {
                this.setState((prevState) => ({
                    'memberList': [...prevState.memberList.slice(0, prevState.memberList.length - 1)], 
                    'familyArray': prevState.familyArray,
                    memberCount: prevState.memberCount - 1,
                }))
            }
        }
    }

    incrementCompleteCount() {
        this.setState((prevState) => ({completeCount: prevState.completeCount + 1}))
    }

    checkValidChild() {
        for (let obj in this.state.result) {
            if (this.state.result[obj]['invalid-child']) {
                return false;
            }
        }
        return true;
    }

    proceed() {
        if (this.state.memberCount === this.state.completeCount && this.checkValidChild()) {
            this.incrementPage();
            this.updateState({'family-members': this.state.result})
        }
    }

    toggleClassBar() {
        if (this.state.class.includes('disabled') && !this.checkValidChild()) {
            this.setState((prevState) => ({class: prevState.class.slice(prevState.class.indexOf(' ')) + 'enable'}))
        }
    }

    render() {
        return (
            <div>
                <DateOfBirthFamilyRow
                    updateState={this.updateState}
                    incrementPage={this.incrementPage}
                    familyArray={["Yourself"]}
                    incrementCompleteCount={this.incrementCompleteCount}
                    key={0}
                    idNum={0}
                    updateRootComponent={this.updateRootComponent}
                />
                <DateOfBirthFamilyRow
                    updateState={this.updateState}
                    incrementPage={this.incrementPage}
                    familyArray={["Wife", "Husband" , "Son", "Daughter"]}
                    incrementCompleteCount={this.incrementCompleteCount}
                    key={1}
                    idNum={1}
                    updateRootComponent={this.updateRootComponent}
                />
                {this.state.memberList}
                <div className={this.state.class}>Your child needs to be younger than 16 years old</div>
                <div className={'family-btn-wrapper'} style={{'position': 'relative', 'display': 'flex', 'justifyContent': 'space-between'}}>
                    <div className={'add-remove-btn-wrapper'} style={{'display': 'flex'}}>
                        <div className={'proceed-btn'} onClick={this.addMember}>Add Member</div>
                        <div className={'proceed-btn'} onClick={this.removeMember}>Remove Member</div>
                    </div>
                    <div className={'center proceed-btn'} 
                        onClick={() => {
                            console.log(this.state);
                            this.proceed();  
                            this.toggleClassBar();                      
                        }
                    }>Proceed</div>
                </div>
            </div>
        )
    }
}

class DateOfBirthFamilyRow extends Component {
    constructor(props) {
        super(props);
        this.updateState = props.updateState;
        this.incrementPage = props.incrementPage;
        this.familyArray = props.familyArray;
        this.incrementCompleteCount = props.incrementCompleteCount;
        this.updateParentState = this.updateParentState.bind(this);
        this.updateRootComponent = props.updateRootComponent
        this.state = {
            [`member-${this.props.idNum}`]: {
                'age': undefined,
                'gender': undefined
            },
            'classToggle': 'disabled',
            'validHeightWeight': true,
        }
    }

    updateParentState(obj) {
        this.setState(obj, () => {
            this.requestHeightWeight();
            this.checkFormComplete()
        });
    }

    requestHeightWeight() {
        if (this.state[`member-${this.props.idNum}`].age && this.state[`member-${this.props.idNum}`].age >= 40) {
            this.setState({'classToggle': 'enable', 'validHeightWeight': false});
        } else if (this.state[`member-${this.props.idNum}`].age && this.state[`member-${this.props.idNum}`].age < 40) {
            this.setState({'classToggle': 'disabled', 'validHeightWeight': true});
        } 
    }

    checkFormComplete() {
        if ((this.state[`member-${this.props.idNum}`].relation === 'son' && this.state[`member-${this.props.idNum}`].age > 15) || (this.state[`member-${this.props.idNum}`].relation === 'daughter' && this.state[`member-${this.props.idNum}`].age > 15) ) {
            this.updateRootComponent((prevState) => ({'result': {...prevState.result, [`member-${this.props.idNum}`]: {'invalid-child': true}}}))
        } else if (this.state[`member-${this.props.idNum}`].age && this.state[`member-${this.props.idNum}`].gender) {
            this.updateRootComponent((prevState) => ({'result': {...prevState.result, [`member-${this.props.idNum}`]: this.state[`member-${this.props.idNum}`]}}))
        }
    }

    handleKeyPress(event, str) {
        event.persist();
        
        this.setState((prevState) => ({[`${str}`]: prevState[`${str}`] + event.key }));
    }

    render() {
        return (
            <div className='dob-family-row' style={{'position': 'relative', 'display': 'flex', 'flex-direction': 'column'}}>
                <div className={'family-row-wrapper'} style={{'display': 'flex', 'justifyContent': 'space-between'}}>
                    <div /*style={{'float': 'left'}}*/>   
                        <DateOfBirthFamilyMember
                            updateState={this.updateState}
                            incrementCompleteCount={this.incrementCompleteCount}
                            updateParentState={this.updateParentState}
                            key={this.props.key}
                            idNum={this.props.idNum}
                        />
                    </div>
                    <div style={{'float': 'left'}}>
                        <FamilyMember 
                            familyArray={this.familyArray}
                            updateParentState={this.updateParentState}
                            key={this.props.key}
                            idNum={this.props.idNum}
                        />
                    </div>
                </div>

                <div className={this.state.classToggle + ' toggled-height-weight'} style={{'position': 'relative'}}>
                    <input
                        type="text"
                        name="height"
                        placeholder="Height (cm)"
                        autoComplete="off"
                        onKeyDown={(e) =>
                            Array.from("0123456789").includes(e.key) ? this.handleKeyPress(e, 'height'): e.preventDefault()
                        }
                    ></input>
                    <input
                        type="text"
                        name="weight"
                        placeholder="Weight (kg)"
                        autoComplete="off"
                        onKeyDown={e =>
                            Array.from("0123456789").includes(e.key) ? this.handleKeyPress(e, 'weight'): e.preventDefault()
                        }
                    ></input>
                </div>
            </div>
        )
    }
}

class DateOfBirthFamilyMember extends Component {
    constructor(props) {
        super(props);
        this.updateState = props.updateState;
        this.incrementCompleteCount = props.incrementCompleteCount;
        this.updateParentState = props.updateParentState;
        this.state = {
            selectedDay: undefined,
            selectedMonth: undefined,
            selectedYear: undefined,
            firstInput: true,
        }
    }

    checkComplete(selectedDay, selectedMonth, selectedYear) {
        if (selectedDay !== undefined && selectedMonth !== undefined && selectedYear !== undefined) {
            if (this.checkValidAge(selectedDay, selectedMonth, selectedYear)) {
                this.updateParentState((prevState) => (
                    {[`member-${this.props.idNum}`]: {
                        'age': this.calculateAge(selectedDay, selectedMonth, selectedYear), 
                        'gender': prevState[`member-${this.props.idNum}`].gender,
                        'relation': prevState[`member-${this.props.idNum}`].relation,
                    }}
                ))
                if (this.state.firstInput) {
                    this.setState({firstInput: false})
                    this.incrementCompleteCount();
                }
            } else {
                this.updateState({
                    'valid-age': false
                })
            }
        }
    }

    calculateAge(selectedDay, selectedMonth, selectedYear) {
        let birthDate = new Date(parseInt(selectedYear), parseInt(selectedMonth), parseInt(selectedDay));
        let now = new Date();
        let currentYear = now.getFullYear();
        let birthYear = birthDate.getFullYear();
        let age = currentYear - birthYear;
        if (now < new Date(birthDate.setFullYear(currentYear))) {
            age = age - 1;
        }
        return age;
    }

    checkValidAge(selectedDay, selectedMonth, selectedYear) {
        let currentDate = new Date();
        if (currentDate.getFullYear() === parseInt(selectedYear)) {
            if ((currentDate.getMonth() + 1) === parseInt(selectedMonth) && parseInt(selectedDay) - currentDate.getDate() < 15) {
                return false;
            } else if ((currentDate.getMonth() + 1) < parseInt(selectedMonth)) {
                return false;
            }
        } else if (parseInt(selectedYear) + 50 === currentDate.getFullYear()) {
            if (parseInt(selectedMonth) < currentDate.getMonth() + 1) {
                return false;
            } else if (parseInt(selectedMonth) === currentDate.getMonth() + 1 && parseInt(selectedDay) < currentDate.getDate()) {
                return false;
            }
        }
        return true;
    }

    render() {
        let days = []
        for (let i = 1; i < 32; i++) {
            days.push(<option key={i.toString()} value={i.toString()} >{i.toString()}</option>)
        }
        
        let months = [{str: "January", num: 1}, 
                    {str: "February", num: 2},
                    {str: "March", num: 3}, 
                    {str: "April", num: 4},
                    {str: "May", num: 5},
                    {str: "June", num: 6},
                    {str: "July", num: 7}, 
                    {str: "August", num: 8},
                    {str: "September", num: 9},
                    {str: "October", num: 10}, 
                    {str: "November", num: 11}, 
                    {str: "December", num: 12}]

        let dateObj = new Date();
        let years = [];
        for (let i = parseInt(dateObj.getFullYear() - 50); i <= parseInt(dateObj.getFullYear()); i++) {
            years.push(<option key={i.toString()} value={i.toString()} >{i.toString()}</option>)
        }

        return (
            <div className="dob">
                <select name="day" onChange={(e) => {
                    this.setState({selectedDay: e.target.value},
                        () => this.checkComplete(this.state.selectedDay, this.state.selectedMonth, this.state.selectedYear)
                    );
                    this.checkComplete(this.state.selectedDay, this.state.selectedMonth, this.state.selectedYear);
                }}>
                    <option value="" selected disabled>Day</option>
                    {days}
                </select>

                <select name="month" onChange={(e) => {
                    this.setState({selectedMonth: e.target.value},
                        () => this.checkComplete(this.state.selectedDay, this.state.selectedMonth, this.state.selectedYear)
                    );
                }}>
                    <option value="" selected disabled>Month</option>
                    {months.map((month) => <option key={month.str.toLowerCase()} value={parseInt(month.num)}>{month.str}</option>)}
                </select>

                <select name="year" onChange={(e) => {
                    this.setState({selectedYear: e.target.value},
                        () => this.checkComplete(this.state.selectedDay, this.state.selectedMonth, this.state.selectedYear)
                    );
                }}>
                    <option value="" selected disabled>Year</option>
                    {years}
                </select>
            </div>
        )
    }
}

class FamilyMember extends Component {
    constructor(props) {
        super(props);
        this.updateState = props.updateState;
        this.incrementPage = props.incrementPage;
        this.familyArray = props.familyArray;
        this.updateParentState = props.updateParentState;
        this.aRef = React.createRef();
        this.updateGender = this.updateGender.bind(this);
    }

    identifyGender(string) {
        if (string === 'wife' || string === 'daughter') {
            return 2;
        } else if (string === 'husband' || string === 'son' || string === 'yourself') {
            return 1;
        }
    }

    updateGender() {
        let gender = this.identifyGender(this.aRef.current.value)
        this.updateParentState((prevState) => (
            {[`member-${this.props.idNum}`]: {
                'age': prevState[`member-${this.props.idNum}`].age, 
                'gender': gender,
                'relation': `${this.aRef.current.value.toLowerCase()}`
            }}
        ))
    }

    componentDidMount() {
        this.updateGender();
    }

    render() {
        return (
            <select className="family-member" ref={this.aRef} /*style={{'float': 'right'}}*/ name="family-member" onChange={() => this.updateGender()}>
                {this.familyArray.map((member) => <option value={member.toLowerCase()}>{member}</option>)}
            </select>
        )
    }
}

export default DateOfBirthFamily;