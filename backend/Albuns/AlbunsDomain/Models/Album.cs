using System;
using System.Collections.Generic;
using System.Text;

namespace AlbunsDomain.Models
{
    public class Album
    {
        public string AlbumId { get; set; }
        public string Nome { get; set; }
        public int AnoLancamento { get; set; }
        public IList<Musica> Musicas { get; set; } = new List<Musica>();
    }
}
