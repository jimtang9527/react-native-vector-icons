/**
 * Minicloud icon set component.
 * Usage: <Minicloud name="icon-name" size={20} color="#4F8EF7" />
 */
import createIconSet from './lib/create-icon-set';
import glyphMap from './glyphmaps/Minicloud.json';

const iconSet = createIconSet(glyphMap, 'Minicloud', 'Minicloud.ttf');

export default iconSet;

