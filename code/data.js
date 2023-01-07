export function MyCollection_beforeInsert(item, context) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(item.email)) {
        return item;
    } else {
        return Promise.reject('Invalid email address.');
    }
  }
  