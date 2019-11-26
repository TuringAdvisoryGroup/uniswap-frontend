import React, { useState } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils'

import { ReactComponent as EthereumLogo } from '../../assets/images/ethereum-logo.svg'

const socialMoneyMediaMap = {
  '0xdcfe18bc46f5a0cd0d3af0c2155d2bcb5ade2fc5':
    'https://roll-token.s3.amazonaws.com/HUE/4abc8020-b954-4e08-be20-5f6958735b01'
}

const TOKEN_ICON_API = address => {
  return `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
    address
  )}/logo.png`
}
const BAD_IMAGES = {}

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: white;
  border-radius: 1rem;
`

const Emoji = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

const StyledEthereumLogo = styled(EthereumLogo)`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function TokenLogo({ address, size = '1rem', ...rest }) {
  const [error, setError] = useState(false)

  // console.log('REST ===>', address)

  let path = ''
  if (address === 'ETH') {
    return <StyledEthereumLogo size={size} />
  } else if (!error && !BAD_IMAGES[address]) {
    path = TOKEN_ICON_API(address.toLowerCase())
  } else if (socialMoneyMediaMap[address]) {
    path = socialMoneyMediaMap[address]
  } else {
    return (
      <Emoji {...rest} size={size}>
        <span role="img" aria-label="Thinking">
          🤔
        </span>
      </Emoji>
    )
  }

  return (
    <Image
      {...rest}
      alt={address}
      src={path}
      size={size}
      onError={() => {
        BAD_IMAGES[address] = true
        setError(true)
      }}
    />
  )
}
