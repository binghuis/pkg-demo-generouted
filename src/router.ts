// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

type Path =
  | `/`
  | `/about`
  | `/login`
  | `/new`
  | `/posts`
  | `/posts/:id`
  | `/posts/:id/:pid?`
  | `/posts/:id/deep`
  | `/register`
  | `/splat/${string}`

type Params = {
  '/posts/:id/deep': { id: string }
  '/posts/:id': { id: string }
  '/posts/:id/:pid?': { id: string; pid?: string }
}

type ModalPath = `/modal`

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { rediect } = utils<Path, Params>()
