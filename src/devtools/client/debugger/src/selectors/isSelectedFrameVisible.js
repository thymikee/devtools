/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

// @flow

import { getSelectedFrame, getSelectedLocation, getCurrentThread } from ".";
import type { State } from "../reducers/types";

/*
 * Checks to if the selected frame's source is currently
 * selected.
 */
export function isSelectedFrameVisible(state: State) {
  const thread = getCurrentThread(state);
  const selectedLocation = getSelectedLocation(state);
  const selectedFrame = getSelectedFrame(state, thread);

  if (!selectedFrame || !selectedLocation) {
    return false;
  }

  return selectedLocation.sourceId === selectedFrame.location.sourceId;
}
