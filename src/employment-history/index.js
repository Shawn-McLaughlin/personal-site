import * as React from 'react';
import CompanyCard from './company-card';
import employmentHistory from "employment-history/employment-history.json"

function EmploymentHistory() {
    return (<React.Fragment>
            {employmentHistory.map((company) => {
                return <CompanyCard companyInfo={company}/>
            })}
        </React.Fragment>
    );
};

export default EmploymentHistory;