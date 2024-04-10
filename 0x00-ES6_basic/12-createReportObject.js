export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}

}
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
