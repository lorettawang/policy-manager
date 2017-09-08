import tokenService from './tokenService'

function getPoliciesForUser() {
  return (
            fetch('/api/policies', {
                method: 'get',
                headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
                //don't need the other part of the header
            })
            .then(response => response.json())
            .then(policies => policies)
        )
}


export default {
  getPoliciesForUser,
}