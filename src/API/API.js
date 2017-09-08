import tokenService from '../utils/tokenService'

const API = {
    fetchAddPolicy: function(policy) {
        return (
            fetch('/api/policies', {
                method: 'post',
                headers: new Headers(
                  {
                    'Authorization': 'Bearer ' + tokenService.getToken(),
                    'Content-Type': 'application/json'
                  }),
                body: JSON.stringify(policy)
            })
            .then(response => response.json())
            .then(policy => policy)
        )
    
    }, 
    
      fetchDeletePolicy: function(policy) {
        return fetch(`/api/policies/${policy._id}`, {
                method: 'delete',
                headers: new Headers(
                  {
                    'Authorization': 'Bearer ' + tokenService.getToken()
                  })
            })
            .then(response => response.json())
            .then(msg => msg);
    }
};

export default API;  