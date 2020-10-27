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
            result: {}
        }
        this.addMember = this.addMember.bind(this);
        this.incrementCompleteCount = this.incrementCompleteCount.bind(this);
        this.proceed = this.proceed.bind(this);
    }

    addMember() {
        this.setState((prevState) => ({'memberList': [...prevState.memberList, (<DateOfBirthFamilyRow
            key={prevState.memberList.length + 2}
            idNum={prevState.memberList.length + 2}
            updateState={this.updateState}
            incrementPage={this.incrementPage}
            familyArray={this.state.childArray}
            incrementCompleteCount={this.incrementCompleteCount}
        />)], 'familyArray': prevState.familyArray, memberCount: prevState.memberCount + 1}))
    }

    incrementCompleteCount() {
        this.setState((prevState) => ({completeCount: prevState.completeCount + 1}))
    }

    proceed() {
        console.log(this.state.memberCount, this.state.completeCount)
        if (this.state.memberCount === this.state.completeCount) {
            this.incrementPage();
        }
    }

    render() {
        return (
            <div>
                <DateOfBirthFamilyRow
                    updateState={this.updateState}
                    incrementPage={this.incrementPage}
                    familyArray={['Yourself']}
                    incrementCompleteCount={this.incrementCompleteCount}
                    key={0}
                    idNum={0}
                />
                <DateOfBirthFamilyRow
                    updateState={this.updateState}
                    incrementPage={this.incrementPage}
                    familyArray={this.state.familyArray}
                    incrementCompleteCount={this.incrementCompleteCount}
                    key={1}
                    idNum={1}
                />
                {this.state.memberList}
                <div style={{'position': 'relative', 'display': 'flex', 'justifyContent': 'space-between'}}>
                    <div onClick={this.addMember}>Add Member</div>
                    <div onClick={this.proceed}>Proceed</div>
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
        this.state = {
            [`member-${this.props.idNum}`]: {
                'age': undefined,
                'gender': undefined
            }
        }
    }

    updateParentState(obj) {
        this.setState(obj, () => console.log(this.state));
    }

    checkFormComplete() {
        if (this.state[`member-${this.props.idNum}`].age && this.state[`member-${this.props.idNum}`].gender) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <div className='dob-family-row' style={{'position': 'relative', 'display': 'flex', 'justifyContent': 'space-between'}}>
                <div style={{'float': 'left'}}>   
                    <DateOfBirthFamilyMember
                        updateState={this.updateState}
                        incrementCompleteCount={this.incrementCompleteCount}
                        updateParentState={this.updateParentState}
                        key={this.props.key}
                        idNum={this.props.idNum}
                    />
                </div>
                <FamilyMember 
                    familyArray={this.familyArray}
                    updateParentState={this.updateParentState}
                    key={this.props.key}
                    idNum={this.props.idNum}
                />
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
    }

    checkComplete(selectedDay, selectedMonth, selectedYear) {
        if (selectedDay !== undefined && selectedMonth !== undefined && selectedYear !== undefined) {
            if (this.checkValidAge(selectedDay, selectedMonth, selectedYear)) {
                this.updateParentState((prevState) => (
                    {[`member-${this.props.idNum}`]: {
                        'age': this.calculateAge(selectedDay, selectedMonth, selectedYear), 
                        'gender': prevState[`member-${this.props.idNum}`].gender
                    }}
                ))
                this.incrementCompleteCount();
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

        let selectedDay, selectedMonth, selectedYear;

        return (
            <div className="dob">
                <select name="day" onChange={(e) => {
                    selectedDay = e.target.value;
                    this.checkComplete(selectedDay, selectedMonth, selectedYear);
                }}>
                    <option value="" selected disabled>Day</option>
                    {days}
                </select>

                <select name="month" onChange={(e) => {
                    selectedMonth = e.target.value;
                    this.checkComplete(selectedDay, selectedMonth, selectedYear);
                }}>
                    <option value="" selected disabled>Month</option>
                    {months.map((month) => <option key={month.str.toLowerCase()} value={parseInt(month.num)}>{month.str}</option>)}
                </select>

                <select name="year" onChange={(e) => {
                    selectedYear = e.target.value;
                    this.checkComplete(selectedDay, selectedMonth, selectedYear);
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
        } else if (string === 'husband' || string === 'son') {
            return 1;
        }
    }

    updateGender() {
        this.updateParentState((prevState) => (
            {[`member-${this.props.idNum}`]: {
                'age': prevState.age, 
                'gender': `${this.identifyGender(this.aRef.current.value)}`
            }}
        ))
    }

    componentDidMount() {
        this.updateGender();
    }

    render() {
        return (
            <select ref={this.aRef} style={{'float': 'right'}} name="family-member" onChange={() => this.updateGender()}>
                {this.familyArray.map((member) => <option value={member.toLowerCase()}>{member}</option>)}
            </select>
        )
    }
}

export default DateOfBirthFamily;