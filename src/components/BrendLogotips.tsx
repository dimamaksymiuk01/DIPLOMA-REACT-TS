import React from 'react';
import { GOOGLE, MOTOTOLA, ONEPLUS, OPPO, REDMI, SAMSUNG, XIAOMI } from '../shared/consts/picturesUrl.ts'

export function SamsungSVG() {
  return (
    <div className={'brendSVG'}>
      <img src={SAMSUNG} />
    </div>
  );
}

export function XiaomiSVG() {
  return (
    <div className={'brendSVG'}>
      <img src={XIAOMI} />
    </div>
  );
}

export function RedmiSVG() {
  return (
    <div className={'brendSVG'}>
      <img src={REDMI} />
    </div>
  );
}

export function GoogleSVG() {
  return (
    <div className={'brendSVG'}>
      <img src={GOOGLE} />
    </div>
  );
}

export function OppoSVG() {
  return (
    <div className={'brendSVG'}>
      <img src={OPPO} />
    </div>
  );
}

export function MotorolaSVG() {
  return (
    <div className={'brendSVG'}>
      <img src={MOTOTOLA} />
    </div>
  );
}

export function OneplusSVG() {
  return (
    <div className={'brendSVG'}>
      <img src={ONEPLUS} />
    </div>
  );
}