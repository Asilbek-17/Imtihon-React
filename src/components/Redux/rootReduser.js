import { combineReducers } from "redux";
import { AuthorReducer } from "./Author/AuthorReducer";
import { TokenReducer } from "./token/tokenReducer";
import { TokebReducer } from "./RegisterToken/RegisterTokenReducer";
import { BooksReduser } from "./Books/BooksReducer";
import { UserReducer } from "./User/UserReducer";

export const RootRedusers = combineReducers({
    author: AuthorReducer,
    books: BooksReduser,
    token: TokenReducer,
    reToken: TokebReducer,
    user: UserReducer,
}) 
