import styled from "styled-components";

const logosData = [
  {
    src: "https://s3-alpha-sig.figma.com/img/2099/8a7c/80831766bb39b6ade8916c0337d0089b?Expires=1694390400&Signature=k7cnAR6tTrvYGi-zeRGo9TwBriQlZVDjQw34qEdyu2tGltNwOgj4-QEjM1hFZxxKLcEbE2ZUYssxdJNagwMpJjNwml-jnbZyKkOvuGyPX5SCJQST6nOgRMwAr6eI4bBt0xlmlhhyzw6B~4GfCwDzXYYFCECCOfn~B~T0R3deod4gCLwbqpxQcmBmxwh5ZUNl5NkbhQYnLRBzXdIjDgCSfQRy2ulqFGZz2d4GlAv1LhntTGct~P7AlJ0I9Vj3WoDKvcXeMEgHKgMgawNLtOFuwItRxoyNhq1epQKreTAzeMkTBImD9NJs9IH0ZyGIRbYyBPRWCCpoQhfuDa~AUgdrcg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    alt: "Mattered logo",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/d4e3/28d6/845a47c9f594d104622720e02d234403?Expires=1694390400&Signature=lfVrf8OH7xE20oEVwM6m7-nmxYIwm1leAF247jhSoH2wigubOV1uJXY4YDF19zKRwu6TL-jURkJXIpWbOn4uLaQvIJumPyKBi0H3ZZLCTy1ZLN6-ff0xM640ehWzhcX2tnyFUxyyQw8mHYTX6L35~ceiq9MM-pZ0FzVBICmBaPGKQNr7HI~JCdqEqLzbQiYFEUg0Qz2l-Lh2T0i1drLf6xwStFbviCxWfZ4ECoNhc1lET7xKVTcx-sG~noyp5B62XzGWi8I8ujQa-DEiRbgw9S5WB7kFJLDIAPFBHgZwi-19blAmFIQAxcBe6CBEJhpDnrjSGPjTVK8rn3aZdUpaVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    alt: "Subway logo",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/78a4/15a7/f6ae454da94ee08c180dd5aa83627dfd?Expires=1694390400&Signature=kaOTLPIa4~Rp4ROtzXYD7-FFo~UKdo1Jng6HMUyf-9OGvm7iK~hVlBIZaFmMAVpxDd~xfZEvQFFSeJrF5OF2~sroF~poxUqsvSk~VfMFmmGMe34WWvzMhOa0H8dYVgCf2RtTM9-pi5kp9m4oJtHJwCNYcvRjJ2uU6TlECd57o3jHthK71fCIA-KlabWDWVHCgM21P7IlchpBZxYIpEpOs0Lbn1ZFP1pM8S10OB5PeC175u3CJulX-ssMp5Hx9TeScRhoQI6YW7ReKIR~Vmnt1BkSWehrSucJaqo12chJWAOK-4g6ayoOx9YSvJUV~RYcuSFDmj~z7WUTNoXDOQ~G9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    alt: "Classpass logo",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/cffd/362e/8fd8c04bab99b69e520439e6f412d1eb?Expires=1694390400&Signature=dItbymnrI6lrP7YKbpaLebCuC8O7wdebLIPTaL3rIc3KYgniXEukFiPeQV1-jyshVYkZTZ-0yzdNAB-~G8GWY9Eqvq3ePbz~hmF2LZrYxel6hizPKFjkn6QI9R8SRVe1czXljditLFNsaxCANuBMagsrNuTfJIi9XETq7M0pOp4VRzGZD7OJZYM41Iwz5uMDgMwY03wKIt4jSLUZh3rS6~wb6~UWPz2mFn1XEvTNnzcTF59YgaZ0DMziVW3y1okZMGcd1aTOOaJPor54~f7dCjx2sOQvPIkA5hoWusyty8A8sPeDGnF6VOLNgNJO0hONGwxuURPwLi4NbsXM~Noe-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    alt: "National Bank logo",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/1fa4/e2c1/25f9ba3dc767bd4a0adc1b9c4c309708?Expires=1694390400&Signature=bNvnSV2xCSCdqvh9R8HGbbneHB2wQBUuIYLksArMrXjHR8pLtBO~tfcmo0yAyHwY3LoQ1n9A3C6lzE7rULEdCT9ZPHqw10vzl~zep5MzautCwzFUb9Pts4bBwMctd1q-1ZxKsSBQNe4nviXUd8OAJFqRkqZzm-XyAIUQeLlkzAHR8IA6FRcFS~ML~M3jMsZnNen35tFD7Ovuxv-xmy3voFQPG8B7Rtj8k0AKDahgYKYv~jzkeT84xhlqvODXs0SX1EkXevOttqUPwkc3Lem~WvtEbw3vQuMHWok6N9jq~eNFxw5OYXsFJuiOi5x3BHk6f7lcLOkX-XCMyOylrLtMYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    alt: "Boltshift logo",
  },
];

const LogosWrapper = styled.div`
  grid-column: 3 / 9;
  max-width: 114rem;
  padding: 4.2rem 0.4rem;
  margin: 2.5rem 0 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  border-radius: 0.4rem;
  border: 1px solid var(--clr-gray-light);
  background: var(--clr-gray-dark);
`;

const Image = styled.img`
  max-width: 13.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`;

const Logos = () => {
  return (
    <LogosWrapper>
      {logosData.map((logo, index) => (
        <Image key={index} src={logo.src} alt={logo.alt} />
      ))}
    </LogosWrapper>
  );
};

export default Logos;
