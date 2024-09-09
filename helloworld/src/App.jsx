import { createEffect, createSignal } from 'solid-js';
import {A} from '@solidjs/router';
import { Style } from "@solidjs/meta";
import "./App.module.css";
import ComboBox from './Combobox';

const App = props => (
  <>
    <ComboBox />
    <nav>
      <A href="/">Home</A>
      <A href="/wallets">Wallets</A>
      <A href="/transfers">Transfers</A>
    </nav>
    <h1>Site Title</h1>
    {props.children}
  </>
)

export default App;
